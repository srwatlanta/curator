class UsersController < ApplicationController
  def index
    users = User.all
    render json: users.to_json(:include => {
                                 :videos => { :only => [:id, :video_url] },
                                 :to_dos => { :only => [:id, :item, :comment, :urgency] },
                                 :flash_cards => { :only => [:id, :clue, :answer] },
                               }, :except => [:updated_at])
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user.to_json(:include => {
                                :videos => { :only => [:id, :video_url] },
                                :to_dos => { :only => [:id, :item, :comment, :urgency] },
                                :flash_cards => { :only => [:id, :clue, :answer] },
                              }, :except => [:updated_at])
  end
end
