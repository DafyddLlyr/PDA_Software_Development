require("minitest/autorun")
require("minitest/rg")
require_relative("../card")
require_relative("../testing_task_2")


class CardTest < MiniTest::Test

  def setup
    @game = CardGame.new
    @card_1 = Card.new("heart", 1)
    @card_2 = Card.new("heart", 2)
    @card_3 = Card.new("diamond", 2)
    @cards = [@card_1, @card_2, @card_3]
  end

  def test_checkforAce__ace
    assert_equal(true, @game.check_for_ace(@card_1))
  end

  def test_checkforAce__not_ace
    assert_equal(false, @game.check_for_ace(@card_2))
  end

  def test_highest_card__different_values
    assert_equal(@card_2, @game.highest_card(@card_1, @card_2))
  end

  def test_highest_card__same_values
    assert_equal("Both cards are equal", @game.highest_card(@card_2, @card_3))
  end

  def test_cards_total
    assert_equal("You have a total of 5", CardGame.cards_total(@cards))
  end

end
