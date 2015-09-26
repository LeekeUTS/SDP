using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class AskController : Controller
    {
        //
        // GET: /Ask/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult RepeatList() { return View(); }

    }
}
