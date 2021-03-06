﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    [Authorize]
    public class DemoController : Controller
    {
        //
        // GET: /Demo/

        public ActionResult Index()
        {
            //return View();
            return RedirectToAction("Newsession", "Demo");
        }

        public ActionResult Profile()
        {
            return View();
        }

        public ActionResult Help()
        {
            return View();
        }
        public ActionResult Newsession()
        {
            return View();
        }
        public ActionResult Program()
        {
            return View();
        }
        public ActionResult Workshop()
        {
            return View();
        }
        public ActionResult WorkshopList(int id)
        {
            //todo: if id=nll then error
            return View(id);
        }
        public ActionResult Signup()
        {
            return View();
        }

        public ActionResult db_WorkShopSet()
        {
            return View();
        }

        public ActionResult Json_Campus()
        {
            return View();
        }

        public ActionResult Json_Lecturer()
        { 
            return View();
        }

        public ActionResult Json_Appointment()
        {
            return View();
        }

        public ActionResult Json_Assignment()
        {
            return View();
        }

        public ActionResult Json_SessionBookingSearch()
        {
            return View();
        }

        public ActionResult Json_SessionType()
        {
            return View();
        }

        public ActionResult Json_Student()
        {
            return View();
        }

        public ActionResult Json_WorkshopBookingSearch()
        {
            return View();
        }

        public ActionResult Json_WorkshopSearch()
        {
            return View();
        }

        public ActionResult Json_WorkshopWorkshopSets()
        {
            return View();
        }

        public ActionResult Json_Index()
        {
            return View();
        }

        public ActionResult Code_Test()
        {
            return View();
        }
    }
}
