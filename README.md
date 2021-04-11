# austin_crime_EDA
Exploratory data analysis of austin crime data. 

## Resources 
- Python 3.7.6, JupyterLab 2.26
- Javascript, HTML, VS Code 1.51.1
- [PostgreSQL 12.2](https://www.postgresql.org/), [Pgadmin 4.20](https://www.pgadmin.org/) 
- [Austin Crime Report Data](https://data.austintexas.gov/Public-Safety/Crime-Reports/fdj4-gpfu)


## Overview 
The purpose of this project is to analyize crime incident data for the city of Austin, Texas in order to create meaningful insights into various statistics and metrics on the matter. 
The data being analyzed is produced from the city of Austins government database which is regularly updated when incident reports are filed. 
Since this project is foccusing on crime on a yearly basis, only data for complete and the most recent three years(2018 -2020) are being analyzed.   


## Project Stages 
### Data ETL (Extrat, Transform & Load) 
A custom function has been built to automate all steps of the data ETL process between the public austin dataabase and my local Postgre database. 
The function takes in 3 arguments: 
- api_endpoint (required)
- new_database_name (required)
- api_parameters(optional) 

Once ran with the necessary arguments, the function peroforms an api request with the provided endpoint url. 
The data is then parsed from json to a tabular format as pandas dataframe. 
Several cleanng and transforming prcoesses are performed, including changing data types. 

The data is then split into separte dataframes to reflect the database schema/erd whis has been defined to

A data ETL pipeline is created which 
An ETL Pipeline is created by defining a custom function which compiles  
Python script which extracts data via api, then cleans, transforms, and creates a database in which the data is loaded into.

### Exploration and Transformation 


### Visualizing & Deployment 



