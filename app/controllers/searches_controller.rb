class SearchesController < ApplicationController
  def index
    @q = Lesson.ransack(params[:q])
    @lessons = @q.result(distinct: true)
  end

  def search
    @q = Lesson.search(search_params)
    @lessons = @q.result(distinct: true)
  end

  private
  def search_params
    params.require(:q).permit(:title_cont)
  end
end
