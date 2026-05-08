// استيراد الدوال من الملف الأصلي
const { filterByGenre, getAllGenres } = require('../movie');

test('تصفية الأفلام حسب نوع الرعب', () => {
    const movies = [
        { title: 'فيلم رعب 1', genre: 'رعب' },
        { title: 'فيلم رعب 2', genre: 'رعب' },
        { title: 'فيلم كوميدي', genre: 'كوميدي' }
    ];
    
    const result = filterByGenre(movies, 'رعب');
    
    expect(result.length).toBe(2);
    expect(result[0].title).toBe('فيلم رعب 1');
});

test('جلب كل أنواع الأفلام بدون تكرار', () => {
    const movies = [
        { title: 'فيلم 1', genre: 'رعب' },
        { title: 'فيلم 2', genre: 'كوميدي' },
        { title: 'فيلم 3', genre: 'رعب' },
        { title: 'فيلم 4', genre: 'دراما' }
    ];
    
    const genres = getAllGenres(movies);
    
    expect(genres).toEqual(['رعب', 'كوميدي', 'دراما']);
    expect(genres.length).toBe(3);
});