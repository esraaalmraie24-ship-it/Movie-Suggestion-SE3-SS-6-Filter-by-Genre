// دالة لتصفية الأفلام حسب النوع (Genre)
function filterByGenre(movies, genre) {
    
    if (!movies || !Array.isArray(movies)) {
        return [];
    }
    
    // فلتر الأفلام اللي نوعها يساوي genre المطلوب
    return movies.filter(movie => movie.genre === genre);
}

// دالة لجلب كل أنواع الأفلام (بدون تكرار)
function getAllGenres(movies) {
    if (!movies || !Array.isArray(movies)) {
        return [];
    }
    
    const genres = movies.map(movie => movie.genre);
    return [...new Set(genres)];
}

// تصدير الدوال للاستخدام في الاختبارات
module.exports = {
    filterByGenre,
    getAllGenres
};
// test