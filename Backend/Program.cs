using Backend.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSingleton<IAdminRepo,AdminRepo>();
//builder.Services.AddSingleton<IBlueJobsRepo,BlueJobsRepoRepo>();
//builder.Services.AddSingleton<IApplicantRepo,ApplicantRepo>();
//builder.Services.AddSingleton<IEmployerRepo,EmployerRepo>();
//builder.Services.AddSingleton<IJobOfferRepo,JobOfferRepo>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();