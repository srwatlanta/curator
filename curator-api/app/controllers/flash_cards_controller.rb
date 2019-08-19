class FlashCardsController < ApplicationController
  def create
    FlashCard.create(flash_card_params)
  end

  def update
    flash_card = FlashCard.find_by(id: params[:id])
    flash_card.update(flash_card_params)
  end

  def destroy
    flash_card = FlashCard.find_by(id: params[:id])
    flash_card.delete
  end

  private

  def flash_card_params
    params.require(:flash_card).permit(:user_id, :clue, :answer)
  end
end
