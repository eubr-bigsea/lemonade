# Basic Usage

## Workflow Editor

Now it is possible to create a workflow to understand its basic usage as well as
the results visualisation. But first you need to understand the concept behind
it. A workflow is where the projects are created, it consists of a simple
interface to drag, drop and connect blocs. Each one contains attributes, which
are required if there is an asterisk by its side. To start click in the second
icon of the sidebar, denominated as workflow. Then click on 'Create new'.

![initial-wf-page](/img/basic_usage/initial-workflow-page.png)

You will then be redirected to add the title, description, platform and icon.
The only requirement for now is to select Spark as the platform, wich is an
engine for big data processing. The other fields can be filled in your own way.

![creating-workflow](/img/basic_usage/creating-workflow.png)

Now you are in the workflow editor. On the left are all supported operations
sorted by categories, when you select one, the blocks that can be used appear.
Bellow is a brief explanation of each grouping.

- Data source and target: Data reading and writing
- Data transformation: Modify existing data, such as deleting a line.
- Data utilities: General data operations that does not fall into the other
  categories.
- Data visualisation: Data and result visualisation in different formats, such
  as graphics and maps.
- Geo: Reading and analysis of geospatial data in vector form.
- Machine learning: Tools to recognize patterns and learn with it without being
  explicitly programmed.
- Others: General operations that does not fall into the other categories.
- Publish in production: Tools to transit between the test or development
  environment for production.

In addition, there is also the top bar with the name, which can be edited, and
the following options:

![save-icon](/img/basic_usage/save-icon.png) : Save the changes made in the
project.

![trash-icon](/img/basic_usage/trash-icon.png) : Delete project.

![zoom-in-icon](/img/basic_usage/zoom-in-icon.png) : Zoom in the blocks area,
bellow this bar.

![zoom-out-icon](/img/basic_usage/zoom-out-icon.png) : Zoom out the blocks area.

![execute-button](/img/basic_usage/execute-button.png) : Execute the workflow.

![clean-wf-editor](/img/basic_usage/clean-workflow-editor.png)

In this workflows, the Iris data set added in the previous step will be
imported, click on 'Data source and target' and drag the 'Data reader' block. To
access their properties click on the 'Data reader 1' created.

![wf-data-reader](/img/basic_usage/wf-data-reader.png)

Each attribute will be better explained in the next step, for now, just select
'Iris Data Set' in 'Data source' (first item) and check the first two boxes in
the 'Results' tab as shown in the image above. This will allow the visualisation
of the first 50 flowers and also the structure of the Iris database.
Now the workflow is ready for execution, to do this, click the green 'Execute'
button. This will save the changes automatically and the execution screen will
appear. When the title changes from Running to Completed you can view the
results, this screen can be accessed again by the side tab in the third icon,
labeled 'Jobs'.

![first-result](/img/basic_usage/first-result.png)

On the right side will appear options for each block added. In this example,
there are the following icons.

![parameters-icon](/img/basic_usage/parameters-icon.png) : Visualisation of 
previously selected parameters.

![log-icon](/img/basic_usage/log-icon.png) : Logs generated during execution,
containing time and day.

![table-icon](/img/basic_usage/table-icon.png) : Datasource visualisation.

By clicking on the table icon, and after in 'Sample data for output data',
you can see the first 50 flowers of the data set.

![sample-data-iris](/img/basic_usage/sample-data-iris.png)

You can also view the structure by clicking on 'Schema for output data'.

![schema-iris](/img/basic_usage/schema-iris.png)
