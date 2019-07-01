using System.Collections.Generic;
using MeetupApp.API.Models;
using Newtonsoft.Json;

namespace MeetupApp.API.Data
{
    public class Seed
    {

        private readonly DataContext context;


        public Seed(DataContext context)
        {
            this.context = context;
            
        }

        public void SeedUsers(){
            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            
           var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach(var user in users){
                byte[] passwordHash, passwordSalt;
                createPasswprdHash("password", out passwordHash, out passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt; 
                user.Username = user.Username.ToLower();
                // collection 
                context.Users.Add(user);
            }

            context.SaveChanges();
        }

         private void createPasswprdHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using ( var hmac = new System.Security.Cryptography.HMACSHA512()) {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
           

        }
    }
}