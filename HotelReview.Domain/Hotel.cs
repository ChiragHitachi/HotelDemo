﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace TypeScriptDemo.Domain
{
     //[TsClass]
    public class Hotel
    {
        public int HotelId { get; set; }

        public string Name { get; set; }

        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public int Pincode { get; set; }

        public string ContactNumber { get; set; }

    }
}
