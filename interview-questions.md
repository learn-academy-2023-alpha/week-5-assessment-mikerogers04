# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: In the majority of OOP languages, classes are very important to the overall structure for complex programs. Ruby is no exception in the fact it has parent-child class relationships. In the instance of using super, it will be called inside the initialize method in the child class. It is important to remember super MUST be used in a child class. It allows the parameters defined from the parent class to be used in the child class. Super is a Ruby keyword that takes values inside the parenthesis attached to it. 

For example: We have class Dad(parent class) that has eye and hair color. Then class Son(child class) inherits the dads eye and hair color. Calling on super in the initialize method allows class Son to "inherit" those attributes yet, have its own unique attribute of freckles. 

class Dad
    atter_accessor :eye_color, :hair_color
    def initialize(eye_color, hair_color)
        @eye_color = eye_color
        @hair_color = hair_color
    end
end

class Son < Dad
    attr_accesscor :eye_color, :hair_color, :face_attribute
    def initialize(eye_color, hair_color, face_attribute)
        super(eye_color, hair_color)
        @face_attribute = 'freckles'
    end
end

Researched answer: Further research stated that instance variables are not inherited by the subclass because they are local to the class they were initialized in. That is why the super method is used in subclasses to inherit those variables. A parent class can also be called a super class, whereas a child class can be called a subclass. A superclass can send information to many subclasses as long as super is called upon in those subclasses.  

2. What is a gem?

Your answer: A gem is a package manager designed for Ruby. RSpec is an example of a Ruby gem. When working with RSpec, you have to install that gem in the place you're working with Ruby code you want to test. Without installation, you cannot use the testing environment of RSpec on Ruby files. 

Researched answer: Further research made it more clear that a gem is not a package manager. While it can be considered a package, the specific package manager for Ruby is called RubyGems. A gem is a library of code functionality that can be imported to be used for developers. To dive a little bit deeper, comparitively in JS, Jest is a testing framework that when installed brings a large amount of dependencies into a single place. That folder being called node_nodules. In Ruby, when using RSpec, you have to import those dependencies onto the test file itself. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is where one or more databases are related by the data stored in them. 

Table 1: 
Learn Academy: instructor_name, cohort_name
Table 2:
Students: student_name, cohort_year

For example: Given two tables, Learn Academy and Student, each with different data. While these two database are named different and contain different data. They are related in context and can both be referenced by a foreign key. 

There are other kinds of databases. Relational databases are the most common type used. 

Researched answer: Upon further research, the keyword table was what I was missing in my explanation. A database can have many tables that all have relationships with one another. The collection of all entries in a table that contain the same attributes is a relation. Other types of databases include hierarchical, non-relational, object-oriented, and many more. 

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers to individual databases when created. Primary keys are created automatically after database creation. Primary keys go in sequential order (1,2..etc) for every new piece of information added to the database. Primary keys are incredibly important because they help identify every entry into a database. No two entries can have the same primary key. 

Researched answer: Primary keys are denoted by id. Primary keys provide a unique identifier to each entry even if those entries have the same information. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

CRUD with corresponding HTTP verb:
Create: Post
Read: Get
Update: Put, Patch
Delete: Delete

Researched answer: Post is used to create an item. Get is used to retrieve a single item or list of items. Put/Patch is used to update an item. Delete is simply to delete an item. 

HTTP Verb with corresponding status codes:
Post: 201 sucess, 404/409 fail
Get: 200 sucess, 404 fail
Put/Patch: 200, 204 success, 404 fail
Delete: 200 success, 404 fail

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Representational State Transfer creates a direction for CRUD operations into HTTP requests.

2. Model validations: Ensures data is valid and saved into databases. Any errors in validation and data will not be saved. 

3. Params: Can be passed or not passed in a Rails route structure.

4. ERB: Embedded Ruby/Templated Ruby allows HTML to be coded and rendered in the view. 

5. API: Application Program Interface is an app that transmits data by JSON. 
