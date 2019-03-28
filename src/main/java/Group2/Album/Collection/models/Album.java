package Group2.Album.Collection.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Album {
	
	@Id
	@GeneratedValue
	private Long id;
	private String albumTitle;
	private String albumImage; 
	private int rating;
	
	@ManyToOne
	@JsonIgnore
	private Artist artist;

	@ManyToMany
	private Collection<Tag> allTags;
	
	@OneToMany(mappedBy="album")
	private Collection<AlbumComment> albumComments;
	
	@OneToMany
	private Collection<Song> allSongs;
	
	public Album() {}
	
	public Album(String albumTitle, String albumImage, int rating , Artist artist, Tag ...allTags) {
		this.albumTitle = albumTitle;
		this.albumImage = albumImage;
		this.rating = rating;
		this.artist = artist;
		this.allTags = Arrays.asList(allTags);
		this.allSongs = new ArrayList<Song>();
	}

	public Long getId() {
		return id;
	}

	public String getAlbumTitle() {
		return albumTitle;
	}

	public String getAlbumImage() {
		return albumImage;
	}

	public int getRating() {
		return rating;
	}

	public Artist getArtist() {
		return artist;
	}

	public Collection<Tag> getAllTags() {
		return allTags;
	}

	public Collection<AlbumComment> getAlbumComments() {
		return albumComments;
	}
	

	public Collection<Song> getAllSongs() {
		return allSongs;
	}
	
	public void addSong(Song song) {
		allSongs.add(song);
	}

	// adding a comment to Artist
	public void addComment(Comment comment) {
		albumComments.add((AlbumComment) comment);
	}
	
	// adding a tag to Album
	public void addTag(Tag tag) {
		allTags.add(tag);
	}

	@Override
	public String toString() {
		return "Album [id=" + id + ", albumTitle=" + albumTitle + ", albumImage=" + albumImage + ", rating=" + rating
				+ ", artist=" + artist + ", allTags=" + allTags + "]";
	}
	
}
