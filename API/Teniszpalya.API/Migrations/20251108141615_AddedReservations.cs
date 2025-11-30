using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Teniszpalya.API.Migrations
{
    /// <inheritdoc />
    public partial class AddedReservations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CreatedAt = table.Column<long>(type: "INTEGER", nullable: false),
                    ReservedAt = table.Column<long>(type: "INTEGER", nullable: false),
                    Hours = table.Column<float>(type: "REAL", nullable: false),
                    UserID = table.Column<int>(type: "INTEGER", nullable: false),
                    CourtID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reservations");
        }
    }
}
