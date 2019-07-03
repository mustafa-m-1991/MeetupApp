using System;
using System.Collections.Generic;
using MeetupApp.API.Models;

namespace MeetupApp.API.Dtos
{
    public class UserForEditDto
    {
        public string About { get; set; }
        public string SearchingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}