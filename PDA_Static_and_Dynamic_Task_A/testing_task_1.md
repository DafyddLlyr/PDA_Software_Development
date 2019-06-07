### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # Function name not in keeping with Ruby convention, should use snake case
    if card.value = 1 # Carrying out assignment instead of comparison
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # Typo - should say "def", no comma between parameters
  if card1.value > card2.value
    return card.name # Variable "card not declared - should be card1.name or just card1. Card class does not have "name" method.
  else
    card2 # Result doesn't match format of the "if" statement - unclear which is correct
  end
end # Logic of function does not account for two cards of equal values being passed in
end # Additional end statement not required, this ends the Card class

def self.cards_total(cards)
  total # "Total" not assigned a value when created
  for card in cards
    total += card.value
    return "You have a total of" + total # Return statement is within for loop, will return once for each card. No space after "of" meaning result will be formatted incorrectly. String is also not interpolated correctly with variable "total"
  end
end

# No "end" statement for card class, see comment on line 30
```
