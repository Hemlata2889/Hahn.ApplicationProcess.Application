﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Hahn.ApplicationProcess.December2020.Data.DBModels
{
    public class ApplicationContext
    {
        public DbSet<ApplicantModel> ApplicantModels { get; set; }
    }
}
