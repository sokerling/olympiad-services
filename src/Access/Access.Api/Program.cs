var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddHealthChecks();

var app = builder.Build();

app.UseExceptionHandler();
app.UseStatusCodePages();

app.MapHealthChecks("/health");
app.MapGet("/api/service", () => new
{
    Name = "access",
    DisplayName = "Доступ и роли"
});

app.Run();
