USE [master]
GO
/****** Object:  Database [MVCDB]    Script Date: 11/07/2024 20:29:28 ******/
CREATE DATABASE [MVCDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MVCDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\MVCDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MVCDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\MVCDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [MVCDB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MVCDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MVCDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MVCDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MVCDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MVCDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MVCDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [MVCDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MVCDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MVCDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MVCDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MVCDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MVCDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MVCDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MVCDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MVCDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MVCDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [MVCDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MVCDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MVCDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MVCDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MVCDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MVCDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MVCDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MVCDB] SET RECOVERY FULL 
GO
ALTER DATABASE [MVCDB] SET  MULTI_USER 
GO
ALTER DATABASE [MVCDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MVCDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MVCDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MVCDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MVCDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MVCDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'MVCDB', N'ON'
GO
ALTER DATABASE [MVCDB] SET QUERY_STORE = ON
GO
ALTER DATABASE [MVCDB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [MVCDB]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 11/07/2024 20:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Age] [int] NULL,
	[STATE] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Employee] ON 

INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (1, N'Japtor Gortheia', 22, N'Milan', N'Italy')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (2, N'Oliver Braunschweig', 29, N'Shanghai', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (3, N'Sophia Wu', 23, N'Hong Kong', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (4, N'Alexis Johnson', 29, N'Austin', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (5, N'Daniel Santos', 30, N'Lisbon', N'Portugal')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (6, N'Jacob White', 29, N'Toronto', N'Canada')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (7, N'Benjamin Roseburg', 29, N'Atlanta', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (8, N'Mia Leblanc', 29, N'Paris', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (9, N'Neco William', 29, N'Toulouse', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (10, N'Ethan Brown', 29, N'Aarhus', N'Denmark')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (11, N'Antony Fischer', 29, N'Naples', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (12, N'Olex Mikhailov', 29, N'Malmo', N'Sweden')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (13, N'Harper William', 29, N'Birmingham', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (14, N'Frederic Meier', 29, N'Edinburgh', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (15, N'Rio Laurent', 29, N'Seoul', N'South Korea')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (16, N'David Anderson', 29, N'Gothenburg', N'Sweden')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (17, N'Bill William', 29, N'Madrid', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (18, N'Sophia Smith', 29, N'California', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (19, N'Alexander Giordano', 29, N'Kazan', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (20, N'Alice Smith', 29, N'California', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (21, N'John Doe', 34, N'New York', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (22, N'Emma Johansson', 27, N'Stockholm', N'Sweden')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (23, N'Liam O''Connor', 42, N'Dublin', N'Ireland')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (24, N'Olivia Brown', 31, N'Texas', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (25, N'Noah Garcia', 36, N'Madrid', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (26, N'Sophia Müller', 25, N'Berlin', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (27, N'Mia Zhang', 28, N'Beijing', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (28, N'Ivan Petrov', 39, N'Moscow', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (29, N'Lucas Dubois', 33, N'Paris', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (30, N'Emily Johnson', 26, N'Ontario', N'Canada')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (31, N'Alexander Chen', 41, N'Shanghai', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (32, N'Ella Taylor', 24, N'Manchester', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (33, N'William Andersson', 47, N'Gothenburg', N'Sweden')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (34, N'Charlotte Novak', 29, N'Prague', N'Czech Republic')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (35, N'James Wilson', 38, N'Florida', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (36, N'Benjamin Leblanc', 30, N'Quebec', N'Canada')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (37, N'Amelia Rossi', 27, N'Rome', N'Italy')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (38, N'Ethan Park', 31, N'Toronto', N'Canada')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (39, N'Lucas Smirnov', 35, N'St. Petersburg', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (40, N'Grace Baker', 32, N'Vancouver', N'Canada')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (41, N'Daniel Kim', 28, N'Seoul', N'South Korea')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (42, N'Sophia Li', 22, N'Hong Kong', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (43, N'Mason White', 44, N'Illinois', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (44, N'Isabella Ivanov', 36, N'Moscow', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (45, N'Henry Dupont', 43, N'Lyon', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (46, N'Ava Schmidt', 29, N'Munich', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (47, N'Jacob Brown', 37, N'Ohio', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (48, N'Michael Fischer', 40, N'Hamburg', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (49, N'Evelyn Garcia', 33, N'Madrid', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (50, N'Ella Meier', 27, N'Zurich', N'Switzerland')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (51, N'Jack Williams', 35, N'Los Angeles', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (52, N'Oliver Weber', 28, N'Vienna', N'Austria')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (53, N'Mia Robinson', 24, N'Edinburgh', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (54, N'Leo Mikhailov', 42, N'Novosibirsk', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (55, N'Harper Tan', 26, N'Beijing', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (56, N'Josephine Chen', 23, N'Shanghai', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (57, N'David Anderson', 37, N'Chicago', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (58, N'Victoria Olsen', 29, N'Oslo', N'Norway')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (59, N'Samuel Dupont', 34, N'Brussels', N'Belgium')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (60, N'Isla Dupuis', 32, N'Geneva', N'Switzerland')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (61, N'Lucas Bauer', 31, N'Frankfurt', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (62, N'Sophia Svensson', 30, N'Malmo', N'Sweden')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (63, N'James Martin', 33, N'Houston', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (64, N'Emily Laurent', 28, N'Marseille', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (65, N'Oliver Zhang', 27, N'Guangzhou', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (66, N'Charlotte Martinez', 39, N'Barcelona', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (67, N'Henry Jensen', 40, N'Copenhagen', N'Denmark')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (68, N'Amelia Laurent', 35, N'Paris', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (69, N'Jackie Wong', 45, N'Hong Kong', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (70, N'Nora Ramirez', 31, N'Bogotá', N'Colombia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (71, N'Harper Wang', 23, N'Beijing', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (72, N'Mason Schmitt', 34, N'Cologne', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (73, N'Lily Müller', 26, N'Stuttgart', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (74, N'David Taylor', 32, N'Manchester', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (75, N'Ella Andersen', 28, N'Copenhagen', N'Denmark')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (76, N'Oscar Gomez', 37, N'Seville', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (77, N'Sarah Nielsen', 29, N'Aarhus', N'Denmark')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (78, N'Gabriel Moreau', 38, N'Lille', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (79, N'Lucas Herrera', 40, N'Valencia', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (80, N'Alexey Kuznetsov', 33, N'Kazan', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (81, N'Marie Dubois', 26, N'Toulouse', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (82, N'Benjamin Young', 41, N'New Jersey', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (83, N'Daniel Kwon', 27, N'Seoul', N'South Korea')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (84, N'Sofia Giordano', 30, N'Naples', N'Italy')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (85, N'Mia Russo', 35, N'Milan', N'Italy')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (86, N'Liam Hughes', 31, N'Birmingham', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (87, N'Olivia Rossi', 24, N'Venice', N'Italy')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (88, N'Leo Kim', 38, N'Seoul', N'South Korea')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (89, N'Ava Cooper', 25, N'Atlanta', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (90, N'Mason Anderson', 36, N'San Francisco', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (91, N'Luna Rossi', 34, N'Rome', N'Italy')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (92, N'Adam Novak', 37, N'Prague', N'Czech Republic')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (93, N'Grace Chen', 28, N'Shanghai', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (94, N'Jacob Ivanov', 30, N'Moscow', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (95, N'David White', 42, N'New York', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (96, N'William Keller', 45, N'Zurich', N'Switzerland')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (97, N'Victoria Smith', 26, N'Toronto', N'Canada')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (98, N'Ella Schmidt', 29, N'Munich', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (99, N'Daniel Laurent', 33, N'Paris', N'France')
GO
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (100, N'Charlotte Williams', 31, N'London', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (101, N'James Zhang', 24, N'Beijing', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (102, N'Benjamin Chen', 43, N'Shanghai', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (103, N'Olivia Hansen', 35, N'Copenhagen', N'Denmark')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (104, N'Noah Wilson', 36, N'Austin', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (105, N'Lucas Brown', 32, N'Seattle', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (106, N'Lily Graham', 27, N'Edinburgh', N'UK')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (107, N'Grace Dubois', 25, N'Lyon', N'France')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (108, N'Daniel Santos', 30, N'Lisbon', N'Portugal')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (109, N'Sophia Wu', 23, N'Hong Kong', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (110, N'Hannah Ivanov', 28, N'St. Petersburg', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (111, N'Mateo Garcia', 29, N'Madrid', N'Spain')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (112, N'Elena Petrova', 39, N'Moscow', N'Russia')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (113, N'Alexander Wilson', 41, N'New York', N'USA')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (114, N'Olivia Zhang', 22, N'Beijing', N'China')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (115, N'Leonard', 19, N'Wurtemburg', N'Germanry')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (116, N'Ashley de Midtenstadt', 27, N'Stutgard', N'Germany')
INSERT [dbo].[Employee] ([EmployeeID], [Name], [Age], [STATE], [Country]) VALUES (117, N'Richard E. Morray', 29, N'Rurh', N'Deustchland')
SET IDENTITY_INSERT [dbo].[Employee] OFF
GO
/****** Object:  StoredProcedure [dbo].[DeleteEmployee]    Script Date: 11/07/2024 20:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--Delete Employee
CREATE PROCEDURE [dbo].[DeleteEmployee] (@Id INTEGER)
AS
BEGIN
	DELETE Employee
	WHERE EmployeeID = @Id;
END
GO
/****** Object:  StoredProcedure [dbo].[InsertUpdateEmployee]    Script Date: 11/07/2024 20:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--Insert and Update Employee
CREATE PROCEDURE [dbo].[InsertUpdateEmployee] (
	@Id INTEGER
	,@Name NVARCHAR(50)
	,@Age INTEGER
	,@State NVARCHAR(50)
	,@Country NVARCHAR(50)
	,@Action VARCHAR(10)
	)
AS
BEGIN
	IF @Action = 'Insert'
	BEGIN
		INSERT INTO Employee (
			Name
			,Age
			,[State]
			,Country
			)
		VALUES (
			@Name
			,@Age
			,@State
			,@Country
			);
	END

	IF @Action = 'Update'
	BEGIN
		UPDATE Employee
		SET Name = @Name
			,Age = @Age
			,[State] = @State
			,Country = @Country
		WHERE EmployeeID = @Id;
	END
END 

GO
/****** Object:  StoredProcedure [dbo].[SelectEmployee]    Script Date: 11/07/2024 20:29:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--Select Employees
CREATE PROCEDURE [dbo].[SelectEmployee]
AS
BEGIN
	SELECT *
	FROM Employee;
END 

GO
USE [master]
GO
ALTER DATABASE [MVCDB] SET  READ_WRITE 
GO
