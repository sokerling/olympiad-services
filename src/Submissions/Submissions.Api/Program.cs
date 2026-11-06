var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddHealthChecks();

var app = builder.Build();

app.UseExceptionHandler();
app.UseStatusCodePages();

app.MapHealthChecks("/health");
app.MapGet("/api/service", () => new
{
    Name = "submissions",
    DisplayName = "Приём бланков"
});

app.Run();
