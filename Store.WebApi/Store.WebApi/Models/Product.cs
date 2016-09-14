using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Store.WebApi.Models
{
    public class Product
    {
        public string Description { get; set; }
        public decimal Price { get; set; }
        [Required(ErrorMessage = "product code is required", AllowEmptyStrings = false)]
        [MinLength(6, ErrorMessage = "product code min lenght is 6 characters ")]
        public string ProductCode { get; set; }
        public int ProductId { get; set; }
        [Required(ErrorMessage = "product name is required", AllowEmptyStrings = false)]
        [MinLength(5, ErrorMessage = "product code min lenght is 5 characters")]
        [MaxLength(11, ErrorMessage = "product code max lenght is 11 characters")]
        public string ProductName { get; set; }
        public DateTime ReleaseDate { get; set; }

    }

}