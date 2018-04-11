using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TizenHrProxy.Models;

namespace TizenHrProxy.Controllers
{
    public class HomeController : Controller
    {
        public readonly TizenSingleton _service;
        public HomeController(TizenSingleton service){
            this._service = service;
        }
        public IActionResult Index()
        {
            
           
            return View();
        }

        public IActionResult SetHr(int id){
            this._service.setHr(id);
            Console.WriteLine("ReqHR:"+id);
            return new OkResult();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            var hr = this._service.getHr();
            ViewData["Message"] = "HR = "+hr;
           
            Console.WriteLine("ReqHR:"+hr);
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
