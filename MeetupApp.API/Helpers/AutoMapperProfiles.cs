using System.Linq;
using AutoMapper;
using MeetupApp.API.Dtos;
using MeetupApp.API.Models;

namespace MeetupApp.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            // source -> destination
            CreateMap<User, UserForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isProfilePicture).Url);
            })
            .ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());

            });

            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>{
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.isProfilePicture).Url);
            })
            .ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());

            CreateMap<Photo, PhotoForDetailedDto>();

            CreateMap<UserForEditDto, User>();

        });

        
    }
}
}