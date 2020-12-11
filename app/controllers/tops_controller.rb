class TopsController < ApplicationController
  def index
    #@tops = Top.all
    #@topics = Topic.all
  end

  def  search
    @posts = Lesson.search(params[:search])
  end

end
