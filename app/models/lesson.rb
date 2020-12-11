class Lesson < ApplicationRecord
  def self.search(search)
    return Lesson.all unless search
    Lesson.where(['content LIKE ?', "%#{search}%"])
  end

end
