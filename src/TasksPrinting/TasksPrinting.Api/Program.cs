var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails();
builder.Services.AddHealthChecks();

var app = builder.Build();

app.UseExceptionHandler();
app.UseStatusCodePages();

app.MapHealthChecks("/health");
app.MapGet("/api/service", () => new
{
    Name = "tasks-printing",
    DisplayName = "Задачи и печать"
});

app.Run();
