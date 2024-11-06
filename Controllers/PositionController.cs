using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using datatables.Models; // Ensure this line is present

namespace datatables.Controllers {
    public class PositionController : Controller {
        private ModelPosition modelPosition = new ModelPosition();

        // GET: Position
        public ActionResult Index() {
            return View(modelPosition.GetAllPositions());
        }

        // GET: Position/Create
        public ActionResult Create() {
            return View();
        }

        // POST: Position/Create
        [HttpPost]
        public ActionResult Create(ModelPosition model) {
            if (ModelState.IsValid) {
                modelPosition.AddPosition(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }

        // GET: Position/Edit/5
        public ActionResult Edit(int id) {
            var position = modelPosition.GetPositionById(id);
            if (position == null) {
                return HttpNotFound();
            }
            return View(position);
        }

        // POST: Position/Edit/5
        [HttpPost]
        public ActionResult Edit(ModelPosition model) {
            if (ModelState.IsValid) {
                modelPosition.UpdatePosition(model);
                return RedirectToAction("Index");
            }
            return View(model);
        }

        // GET: Position/Delete/5
        public ActionResult Delete(int id) {
            var position = modelPosition.GetPositionById(id);
            if (position == null) {
                return HttpNotFound();
            }
            return View(position);
        }

        // POST: Position/Delete/5
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id) {
            modelPosition.DeletePosition(id);
            return RedirectToAction("Index");
        }
    }
}