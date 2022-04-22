import { Tracing } from "trace_events"

export interface Artist {
    external_urls: string,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: Tracing,
}

export interface AlbumArtist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface ExternalUrls {
    spotify: string;
}

export interface ExternalIDs {
    isrc: string,
}

export interface Album {
    album_type: string;
    artists: AlbumArtist[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}



export interface Track {
    album: Album;
    artists: Artist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDs;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface SelectedTrack {
    album: Album;
    artists: Artist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDs;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface Followers {
    href: string;
    total: number;
}


export interface User {
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}