using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using datatables.Models;

namespace datatables.Controllers {
    public class LocationController : Controller {
        private ModelLocation modelLocation = new ModelLocation();

        // GET: Location
        public ActionResult Index() {
            var locations = modelLocation.GetAllLocations();
            return View(locations);
        }

        // GET: Location/List
        public ActionResult List() {
            var locations = modelLocation.GetAllLocations();
            return Json(new { data = locations }, JsonRequestBehavior.AllowGet);
        }

        // GET: Location/Create
        public ActionResult Create() {
            return View();
        }

        // POST: Location/Create
        [HttpPost]
        public ActionResult Create(ObjectLocation model) {
            if (ModelState.IsValid) {
                modelLocation.AddLocation(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }

        // GET: Location/Edit/5
        public ActionResult Edit(int id) {
            var location = modelLocation.GetLocationById(id);
            if (location == null) {
                return HttpNotFound();
            }
            return View(location);
        }

        // POST: Location/Edit/5
        [HttpPost]
        public ActionResult Edit(ObjectLocation model) {
            if (ModelState.IsValid) {
                modelLocation.UpdateLocation(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }

        // GET: Location/Delete/5
        public ActionResult Delete(int id) {
            var location = modelLocation.GetLocationById(id);
            if (location == null) {
                return HttpNotFound();
            }
            return View(location);
        }

        // POST: Location/Delete/5
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id) {
            modelLocation.DeleteLocation(id);
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Add(ObjectLocation location) {
            if (ModelState.IsValid) {
                modelLocation.AddLocation(location);
                return Json(new { success = true });
            }
            return Json(new { success = false, message = "Invalid data" });
        }

        [HttpPost]
        public ActionResult Update(ObjectLocation location) {
            if (ModelState.IsValid) {
                modelLocation.UpdateLocation(location);
                return Json(new { success = true });
            }
            return Json(new { success = false, message = "Invalid data" });
        }

        [HttpGet]
        public ActionResult GetByID(int ID) {
            var location = modelLocation.GetLocationById(ID);
            return Json(location, JsonRequestBehavior.AllowGet);
        }
    }
}