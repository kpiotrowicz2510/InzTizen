using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TizenHrProxy.Models;

namespace TizenHrProxy
{
    public interface ITizenSingleton{
        TizenSingleton Instance {get;}
        void setHr(int value);
        int getHr();
    }
    public class TizenSingleton{

        private int HeartRate {get;set;}

        public TizenSingleton(){
            HeartRate = 0;
        }

        public void setHr(int value){
            this.HeartRate = value;
            System.IO.File.WriteAllText("logfile.txt", value.ToString());
        }

        public int getHr(){
            return Convert.ToInt32(System.IO.File.ReadAllText("logfile.txt"));
        }
    }
}