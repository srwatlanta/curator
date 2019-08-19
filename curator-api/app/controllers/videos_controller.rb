class VideosController < ApplicationController
  def create
    Video.create(video_params)
  end

  def update
    video = Video.find_by(id: params[:id])
    video.update(video_params)
  end

  def destroy
    video = Video.find_by(id: params[:id])
    video.delete
  end

  private

  def video_params
    params.require(:video).permit(:video_url)
  end
end
