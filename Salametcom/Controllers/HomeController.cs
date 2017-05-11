using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Salametcom.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
       
            public ActionResult Donate()
        {
            ViewBag.Message = "المتبرعون";


            return View();
        }



        public ActionResult Voulnteer()
        {
            ViewBag.Message = "معلومات عن برامج التطوع المتوفرة";

            return View();
        }
         public ActionResult Adminstration()
        {

            ViewBag.Message = "نبذة عن المسؤولين القائمين في الجمعية";

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}