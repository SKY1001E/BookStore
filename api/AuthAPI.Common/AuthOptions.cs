using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

namespace AuthAPI.Common
{
        public class AuthOptions
        {
            public string Isuser { get; set; }
            public string Audience { get; set; }
            public string Secret { get; set; }
            public int TokenLifetime { get; set; }
            public SymmetricSecurityKey GetSymmetricSecurityKey()
            {
                return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Secret));
            }
        }
}
