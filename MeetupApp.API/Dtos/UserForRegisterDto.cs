using System.ComponentModel.DataAnnotations;

namespace MeetupApp.API.Dtos {
    public class UserForRegisterDto {
        [Required]
        public string Username {
            get;
            set;
        }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage = "Password range is between 4 and 8")]
        public string password {
            get;
            set;
        }
    }
}