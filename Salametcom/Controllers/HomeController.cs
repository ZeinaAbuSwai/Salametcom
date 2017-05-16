using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DB;

namespace Salametcom.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Database db = new Database();
            ViewBag.users = db.users;
            return View();
        }
        
        public ActionResult Calender()
        {
            return View();
        }

        public ActionResult Donate()
        {
            ViewBag.Message = "התורמים";


            return View();
        }



        public ActionResult Voulnteer()
        {
            ViewBag.Message = "מידע על אנשי הטורמים";
            return View();

            return RedirectToAction("Calender", "Home");
            

        }
        
        public ActionResult Adminstration()
        {
            return View();
            ViewBag.Message = "מידע על צוות הנהלה" ;
            

            return RedirectToAction("Calender", Calender());

            
            
            
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "צור קשר";

            return View();
        }
    }
}