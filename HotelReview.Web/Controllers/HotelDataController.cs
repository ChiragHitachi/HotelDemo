using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TypeScriptDemo.Domain;

namespace AngularJS_POC.Controllers
{
    public class HotelDataController : ApiController
    {
      
        Review[] reviewData = new Review[]
       {
            new Review { ID = '1', review = "Hotel was booked solid, but we got our reservation in just in time. The catch was we (2rooms) were just below the gym. Thankfully they were able to switch us to new rooms as guests checked out. The breakfast was better than I remembered, with fresh berries and even granola. The staff was friendly and helpful throughout the stay. Thank you!" },
            new Review { ID = '2', review = "An example of a great hotel" }

       };

        [HttpGet]
        public List<string> Get(int id)
        {
            var review = reviewData.Where(p => p.ID == id).ToList();

            List<string> reviewName = new List<string>();
            foreach (var s in review)
            {
                reviewName.Add(s.ToString());
            }
            
            return reviewName;

        }

    }

}
