using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using MeetupApp.API.Data;
using MeetupApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MeetupApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]


    public class UsersController : ControllerBase
    {
        private readonly IMeetupRepository repo;
        private readonly IMapper mapper;
        public UsersController(IMeetupRepository repo, IMapper mapper)
        {
            this.mapper = mapper;
            this.repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await repo.GetUsers();

            var usersToReturn = mapper.Map<IEnumerable<UserForListDto>>(users);



            return Ok(usersToReturn); ;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int Id)
        {
            var user = await repo.GetUser(Id);

            var userToReturn = mapper.Map<UserForDetailedDto>(user);


            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int Id, UserForEditDto userForEditDto)
        {
            if (Id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var user = await repo.GetUser(Id);

            mapper.Map(userForEditDto, user);

            if (await repo.SaveAll())
            {
                return NoContent();

            }
            throw new Exception($"Updating user {Id} faild on save");
        }

    }

}