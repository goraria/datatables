using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Data.SqlClient;
using datatables.Models;
using System.IO;
using OfficeOpenXml;
using System.Windows.Forms;
using System.Text.Json;
using System.Configuration;
using System.Reflection;
using System.Data;
using System.Text;
using OfficeOpenXml;
using Xceed.Words.NET;

namespace datatables.Controllers {
    public class DemoController : Controller {
        ModelDemo empDB = new ModelDemo();

        public ActionResult Index() {
            return View();
        }

        public JsonResult List() {
            return Json(empDB.ListAll(), JsonRequestBehavior.AllowGet);
            //try
            //{
            //    return Json(empDB.ListAll(), JsonRequestBehavior.AllowGet);
            //}
            //catch (Exception ex)
            //{
            //    return Json(new { success = false, message = ex.Message }, JsonRequestBehavior.AllowGet);
            //}
        }

        public JsonResult Add(ObjectDemo emp) {
            return Json(empDB.Add(emp), JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetbyID(int ID) {
            var employee = empDB.ListAll().Find(x => x.EmployeeID.Equals(ID));
            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(ObjectDemo emp) {
            return Json(empDB.Update(emp), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int ID) {
            return Json(empDB.Delete(ID), JsonRequestBehavior.AllowGet);
        }

        //private void frmExportData_Load(object sender, EventArgs e) {
        //    // TODO: This line of code loads data into the 'appData.Customers' table. You can move, or remove it, as needed.
        //    this.customersTableAdapter.Fill(this.appData.Customers);
        //    ExcelPackage.LicenseContext = OfficeOpenXml.LicenseContext.NonCommercial;
        //}

        public void ExportToExcel() {
            var datatablesDB = empDB.ListAll();
            using (ExcelPackage Ep = new ExcelPackage()) {
                ExcelWorksheet Sheet = Ep.Workbook.Worksheets.Add("Report");
                Sheet.Cells["A1"].Value = "EmployeeID"; // [1, 1]
                Sheet.Cells["B1"].Value = "Name"; // [1, 2]
                Sheet.Cells["C1"].Value = "Age"; // [1, 3]
                Sheet.Cells["D1"].Value = "State"; // [1, 4]
                Sheet.Cells["E1"].Value = "Country"; // [1, 5]
                int row = 2;
                foreach (var item in datatablesDB) {
                    Sheet.Cells[string.Format("A{0}", row)].Value = item.EmployeeID;
                    Sheet.Cells[string.Format("B{0}", row)].Value = item.Name;
                    Sheet.Cells[string.Format("C{0}", row)].Value = item.Age;
                    Sheet.Cells[string.Format("D{0}", row)].Value = item.State;
                    Sheet.Cells[string.Format("E{0}", row)].Value = item.Country;
                    row++;
                }

                Sheet.Column(1).Style.Numberformat.Format = "0"; // EmployeeID
                Sheet.Column(3).Style.Numberformat.Format = "0"; // Age
                Sheet.Cells["A:AZ"].AutoFitColumns();

                // var stream = new MemoryStream();
                // excel.SaveAs(stream);
                // var fileName = "Employees.xlsx";

                // return File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);

                Response.Clear();
                Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                Response.AddHeader("content-disposition", "attachment: filename=" + "Report.xlsx");
                Response.BinaryWrite(Ep.GetAsByteArray());
                Response.End();
            }
        }

        public void ExportToWord() {
            List<ObjectDemo> employee = new List<ObjectDemo>();
            var datatablesDB = empDB.ListAll();
            using (DocX document = DocX.Create("PeopleExport.docx")) {
                document.InsertParagraph("Employee List").Font("Arial").FontSize(20).Bold().SpacingAfter(20);
                var table = document.InsertTable(empDB.ListAll().Count + 1, 4);

                table.Rows[0].Cells[0].Paragraphs.First().Append("Name").Bold();
                table.Rows[0].Cells[1].Paragraphs.First().Append("Age").Bold();
                table.Rows[0].Cells[2].Paragraphs.First().Append("State").Bold();
                table.Rows[0].Cells[3].Paragraphs.First().Append("country").Bold();

                int row = 1;
                foreach (var item in datatablesDB) {
                    // table.Rows[row].Cells[0].Paragraphs.First().Append(item.EmployeeID.ToString());
                    table.Rows[row].Cells[0].Paragraphs.First().Append(item.Name);
                    table.Rows[row].Cells[1].Paragraphs.First().Append(item.Age.ToString());
                    table.Rows[row].Cells[2].Paragraphs.First().Append(item.State);
                    table.Rows[row].Cells[3].Paragraphs.First().Append(item.Country);
                    row++;
                }

                // document.Save();
                //
                // Response.Clear();
                // Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                // Response.AddHeader("content-disposition", "attachment: filename=" + "Report.docx");
                // // Response.BinaryWrite(Ep.GetAsByteArray());
                // // Response.BinaryWrite(document.GetHashCode());
                // Response.BinaryWrite(document.InsertTable(table));
                // Response.End();

                using (MemoryStream stream = new MemoryStream()) {
                    document.SaveAs(stream);
                    stream.Position = 0;

                    Response.Clear();
                    Response.ContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    Response.AddHeader("content-disposition", "attachment; filename=PeopleExport.docx");
                    Response.BinaryWrite(stream.ToArray());
                    Response.End();
                }
            }

            // byte[] fileBytes = System.IO.File.ReadAllBytes("PeopleExport.docx");
            // return File(fileBytes, "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "PeopleExport.docx");
        }
    }
}