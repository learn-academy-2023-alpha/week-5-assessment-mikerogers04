# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
#Test array for casing
beverages_array2 = ['coffee', 'tea', 'juice', 'water', 'soda', 'Water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
#Test letter
letter_w = 'w'

# Pseudo:
# Create a method called contains_one_letter
#Input: An array of words and a single letter
#Use .select to iterate over the array
#Inside select method, use .include method to check each element in the array if it contains the input letter
#Output: An array containing the words based on the input letter

def contains_one_letter(array, letter)
    #Use .select to filter the input array based on the .include condition
    array.select{|value| value.include?(letter)}
end

p contains_one_letter(beverages_array, letter_o)
#Expected Output: ["coffee", "soda water"]
p contains_one_letter(beverages_array, letter_t)
#Expected Output: ['tea', 'water', 'soda water']
p contains_one_letter(beverages_array2, letter_w)
#Expected Output: ["water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

#Pseudo:
#Create a method called one_ordered_array
#Input: A hash containing three arrays
#Use .flatten method on the hash to return a single array with all key-pair values at each index
#Destructure array then push the array elements only 
#Refactored portion: Instead of destructuring array, remembered you could call upon .values to grab only values inside a hash. Then used .flatten, then .sort for final result. 
#Output: A single, alphabetical ordered array

def one_ordered_array(hash)
    #Refactored to single line to do all data manipulation
    new_array = hash.values.flatten.sort()
    #Used array destructuring to put values into a new array
    #Ended up not needing to destructure because on the above line, using dot notation to pull the hash values upon the .flatten method then sorting the array. 
    # element1, element2, element3, element4, element5, element6 = new_array.sort()
end
p one_ordered_array(us_states)
#Expected Output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(value)
        @current_speed += value
    end

    def brake(value)
        #.max is needed in order to prevent negative numbers upon calling the brake method
        @current_speed = [@current_speed - value, 0].max
    end
end

my_bike = Bike.new('Trek')
p my_bike.bike_info
#Output: "The Trek bike has 2 wheels and is going 0 mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

my_bike.pedal_faster(10) 
p my_bike.bike_info
#Output: "The Trek bike has 2 wheels and is going 10 mph."
my_bike.pedal_faster(18) 
p my_bike.bike_info
#Output: "The Trek bike has 2 wheels and is going 28 mph."
my_bike.brake(5)
p my_bike.bike_info
#Output: "The Trek bike has 2 wheels and is going 23 mph."
my_bike.brake(25)
p my_bike.bike_info
#Output: "The Trek bike has 2 wheels and is going 0 mph."