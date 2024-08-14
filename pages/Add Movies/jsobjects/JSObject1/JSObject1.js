export default {
	async saveMovie () {
		if(
			!title.text || 
			!voteAverage.text || 
			!voteCount.text || 
			!revenue.text || 
			!releaseDate.formattedDate || 
			!originalTitle.text || 
			!budget.text || 
			!homepage.text || 
			!overview.text || 
			!popularity.text || 
			!productionCompanies.text || 
			!spokenLang.text || 
			!tagline.text || 
			!productionCountries.text || 
			!posterPath.text || 
			!backdropPath.text || 
			!keywords.text || 
			!imdbId.text || 
			!status.text
		) {
			return showAlert('All Fields are required', 'error')
		}
		return addMovie.run().then(() => {
			showAlert('Movie details added', 'success')
			navigateTo('Movie List')
		}).then(() => resetWidget('addMovieForm'))
	}
}