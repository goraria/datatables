using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using datatables.Models;
using System.Data.SqlClient;

namespace datatables.Controllers {
    public class MemberController : Controller {
        private readonly string connectionString = "Data Source=OSX;Initial Catalog=DataTables;Integrated Security=True;Trusted_Connection=True";

        // GET: Member
        public ActionResult Index() {
            return View(ListAll());
        }

        public List<ObjectMember> ListAll() {
            List<ObjectMember> members = new List<ObjectMember>();

            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "SELECT * FROM Member";
                SqlCommand cmd = new SqlCommand(query, conn);
                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read()) {
                    members.Add(new ObjectMember {
                        IDMember = reader.GetInt32(reader.GetOrdinal("IDMember")),
                        FullName = reader["FullName"] != DBNull.Value ? reader["FullName"].ToString() : null,
                        Email = reader["Email"] != DBNull.Value ? reader["Email"].ToString() : null,
                        Gender = reader["Gender"] != DBNull.Value ? reader["Gender"].ToString() : null,
                        Salary = reader.GetInt32(reader.GetOrdinal("Salary")),
                        DateOfBirth = reader.GetDateTime(reader.GetOrdinal("DateOfBirth")),
                        DateOfStart = reader.GetDateTime(reader.GetOrdinal("DateOfStart")),
                        DateModified = reader.GetDateTime(reader.GetOrdinal("DateModified"))
                    });
                }
            }

            return members;
        }

        [HttpGet]
        public JsonResult GetMember(int id) {
            ObjectMember member = null;

            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "SELECT * FROM Member WHERE IDMember = @IDMember";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@IDMember", id);
                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read()) {
                    member = new ObjectMember {
                        IDMember = reader.GetInt32(reader.GetOrdinal("IDMember")),
                        FullName = reader["FullName"] != DBNull.Value ? reader["FullName"].ToString() : null,
                        Email = reader["Email"] != DBNull.Value ? reader["Email"].ToString() : null,
                        Gender = reader["Gender"] != DBNull.Value ? reader["Gender"].ToString() : null,
                        Salary = reader.GetInt32(reader.GetOrdinal("Salary")),
                        DateOfBirth = reader.GetDateTime(reader.GetOrdinal("DateOfBirth")),
                        DateOfStart = reader.GetDateTime(reader.GetOrdinal("DateOfStart")),
                        DateModified = reader.GetDateTime(reader.GetOrdinal("DateModified"))
                    };
                }
            }

            return Json(member, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Save(ObjectMember member) {
            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query;
                if (member.IDMember == 0) {
                    query = "INSERT INTO Member (FullName, Email, Gender, Salary, DateOfBirth, DateOfStart, DateModified) VALUES (@FullName, @Email, @Gender, @Salary, @DateOfBirth, @DateOfStart, @DateModified)";
                } else {
                    query = "UPDATE Member SET FullName = @FullName, Email = @Email, Gender = @Gender, Salary = @Salary, DateOfBirth = @DateOfBirth, DateOfStart = @DateOfStart, DateModified = @DateModified WHERE IDMember = @IDMember";
                }

                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@IDMember", member.IDMember);
                cmd.Parameters.AddWithValue("@FullName", member.FullName ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@Email", member.Email ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@Gender", member.Gender ?? (object)DBNull.Value);
                cmd.Parameters.AddWithValue("@Salary", member.Salary);
                cmd.Parameters.AddWithValue("@DateOfBirth", member.DateOfBirth);
                cmd.Parameters.AddWithValue("@DateOfStart", member.DateOfStart);
                cmd.Parameters.AddWithValue("@DateModified", DateTime.Now);
                conn.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("Index");
        }

        [HttpDelete]
        public ActionResult Delete(int id) {
            using (SqlConnection conn = new SqlConnection(connectionString)) {
                string query = "DELETE FROM Member WHERE IDMember = @IDMember";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@IDMember", id);
                conn.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("Index");
        }
    }
}