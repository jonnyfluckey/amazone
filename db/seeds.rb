require 'faker'

20.times do |index|
  Department.create(
    name: Faker::Job.unique.field
  )
end

20.times do |index|
  Product.create(
    name: Faker::GreekPhilosophers.name
    description: Faker::Hipster.sentence
    price: Faker::Number.decimal
    stock: Faker::Number.non_zero_digit
    deparment_id: rand(1..5)
  end
