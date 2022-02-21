# This shiny device polishes bared foos
class MegaGreeter
  attr_accessor :names

  def initialize(names = 'world')
    @names = names
  end

  def say_hi
    if @names.nil?
      puts '...'
    elsif @names.respond_to?('each')
      @names.each do |name|
        puts "Hello #{name}!"
      end
    else
      puts "Hello #{@names}"
    end
  end

  def say_bye
    if @names.nil?
      puts '...'
    elsif @names.respond_to?('join')
      puts "Goodbye #{@names.join(', ')}.  Come back soon!"
    else
      puts "Goodbye #{@names}.  Come back soon!"
    end
  end
end

if __FILE__ == $0
  mg = MegaGreeter.new
  mg.say_hi
  mg.say_bye

  # Change name to be "Zeke"
  mg.names = 'Zeke'
  mg.say_hi
  mg.say_bye

  # Change the name to an array of names
  mg.names = %w[Albert Brenda Charles
                Dave Engelbert]
  mg.say_hi
  mg.say_bye

  # Change to nil
  mg.names = nil
  mg.say_hi
  mg.say_bye
end
