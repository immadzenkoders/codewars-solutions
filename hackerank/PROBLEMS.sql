/* Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.
 The CITY table is described as follows: */
 SELECT * FROM CITY WHERE POPULATION > 100000 AND CountryCode = 'USA';


/* Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.
The CITY table is described as follows: */
SELECT Name FROM CITY WHERE POPULATION > 120000 AND CountryCode = 'USA';


/* Query all columns (attributes) for every row in the CITY table.
The CITY table is described as follows: */
SELECT * FROM CITY;


/*Query all columns for a city in CITY with the ID 1661.
The CITY table is described as follows:*/
SELECT * FROM CITY WHERE ID= 1661;


/*Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.*/
SELECT * FROM CITY WHERE COUNTRYCODE='JPN';


-- Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'JPN';


-- Query a list of CITY and STATE from the STATION table.
SELECT CITY,  STATE FROM STATION;


-- Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
SELECT DISTINCT CITY FROM STATION WHERE ID % 2 = 0;


-- Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
SELECT (COUNT(CITY) - COUNT(DISTINCT CITY))  FROM STATION;


/*Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
The STATION table is described as follows:*/
SELECT CITY, LENGTH(CITY) AS Name_Length FROM STATION ORDER BY Name_Length ASC, CITY LIMIT 1;
SELECT CITY, LENGTH(CITY) AS Name_Length FROM STATION ORDER BY Name_Length DESC, CITY LIMIT 1;


-- Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE CITY LIKE 'A%' OR CITY LIKE 'E%' OR CITY LIKE 'I%' OR CITY LIKE 'O%' OR CITY LIKE 'U%';


-- Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE CITY LIKE '%A' OR CITY LIKE '%E' OR CITY LIKE '%I' OR CITY LIKE '%O' OR CITY LIKE '%U';


-- Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE (LEFT(CITY, 1) IN ('A', 'E', 'I', 'O', 'U')) AND (RIGHT(CITY, 1) IN ('A', 'E', 'I', 'O', 'U'));


-- Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT LIKE 'A%' AND CITY NOT LIKE 'E%' AND CITY NOT LIKE 'I%' AND CITY NOT LIKE 'O%' AND CITY NOT LIKE 'U%';


-- Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT LIKE '%A'  AND  CITY NOT LIKE '%E'  AND CITY NOT LIKE '%I'  AND  CITY NOT LIKE '%O'  AND CITY NOT LIKE '%U';


-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE (LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')) OR (RIGHT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U'));


-- Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY FROM STATION WHERE (LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U')) AND (RIGHT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U'));


-- Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
SELECT NAME FROM STUDENTS WHERE MARKS>75  ORDER BY RIGHT(Name, 3),  ID ASC;


-- Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.
SELECT NAME FROM EMPLOYEE ORDER BY NAME ASC;


-- Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than  per month who have been employees for less than  months. Sort your result by ascending employee_id.
SELECT NAME FROM EMPLOYEE WHERE SALARY>2000 AND MONTHS<10 ORDER BY employee_id ASC;


-- Query the sum of Northern Latitudes (LAT_N) from STATION having values greater than  and less than . Truncate your answer to  decimal places.
SELECT TRUNCATE(SUM(LAT_N),4) FROM STATION WHERE LAT_N>38.7880 AND LAT_N<137.2345;


-- Query the greatest value of the Northern Latitudes (LAT_N) from STATION that is less than . Truncate your answer to  decimal places.
SELECT TRUNCATE(MAX(LAT_N),4) FROM STATION WHERE LAT_N<137.2345;


-- Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than . Round your answer to  decimal places.
SELECT ROUND(LONG_W, 4)  FROM STATION  WHERE LAT_N < 137.2345  ORDER BY LAT_N DESC  LIMIT 1;


-- Query the smallest Northern Latitude (LAT_N) from STATION that is greater than . Round your answer to  decimal places.
SELECT ROUND(MIN(LAT_N),4) FROM STATION WHERE LAT_N>38.7780;


-- Query the Western Longitude (LONG_W)where the smallest Northern Latitude (LAT_N) in STATION is greater than . Round your answer to  decimal places.
SELECT ROUND(LONG_W, 4) FROM STATION WHERE LAT_N > 38.7780 ORDER BY LAT_N ASC LIMIT 1;


/*Consider  and  to be two points on a 2D plane.

 happens to equal the minimum value in Northern Latitude (LAT_N in STATION).
 happens to equal the minimum value in Western Longitude (LONG_W in STATION).
 happens to equal the maximum value in Northern Latitude (LAT_N in STATION).
 happens to equal the maximum value in Western Longitude (LONG_W in STATION).
Query the Manhattan Distance between points  and  and round it to a scale of  decimal places.*/
SELECT ROUND((ABS(MIN(LAT_N)-MAX(LAT_N))+ABS(MIN(LONG_W)-MAX(LONG_W))),4) FROM STATION;


/*Consider  and  to be two points on a 2D plane where  are the respective minimum and maximum values of Northern Latitude (LAT_N) and  are the respective minimum and maximum values of Western Longitude (LONG_W) in STATION.

Query the Euclidean Distance between points  and  and format your answer to display  decimal digits.*/
SELECT ROUND(SQRT(POWER((MIN(LAT_N) - MAX(LAT_N)), 2) + POWER((MIN(LONG_W) - MAX(LONG_W)), 2)), 4) FROM STATION;


-- Query the difference between the maximum and minimum populations in CITY.
SELECT (MAX(POPULATION)-MIN(POPULATION)) FROM CITY;


/*Query the following two values from the STATION table:

The sum of all values in LAT_N rounded to a scale of  decimal places.
The sum of all values in LONG_W rounded to a scale of  decimal places.*/
SELECT ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2) FROM STATION;


/*Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.*/
SELECT CITY.Name FROM CITY  JOIN COUNTRY ON CITY.CountryCode = COUNTRY.Code WHERE COUNTRY.CONTINENT = 'Africa';


-- Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
SELECT COUNTRY.Continent, FLOOR(AVG(CITY.Population)) AS average_population FROM  CITY JOIN COUNTRY ON CITY.CountryCode = COUNTRY.Code GROUP BY COUNTRY.Continent;
