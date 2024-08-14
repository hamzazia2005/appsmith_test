export default {
	async saveMovie () {
		return addMovie.run().then(() => showAlert(('Movie details added', 'success'))).then(() => resetWidget('addMovieForm'))
	}
}