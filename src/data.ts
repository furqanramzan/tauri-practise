import type { Options } from '@/types';

// Utility 10
// Sharing 20
// Media 30
// Database 40
// Development 50
// Design 60
// Browser 70
// Programming language 80
export const softwareOptions: Options = [
	{
		label: 'Which',
		value: 'which',
		order: 10
	},
	{
		label: 'Niv',
		value: 'niv',
		order: 10
	},
	{
		label: 'Anydesk',
		value: 'anydesk',
		order: 20
	},
	{
		label: 'Audacity',
		value: 'audacity-gtk3',
		order: 30
	},
	{
		label: 'Sqlite Browser',
		value: 'sqlitebrowser',
		order: 40
	},
	{
		label: 'Drawio',
		value: 'drawio',
		order: 60
	},
	{
		label: 'Easytag',
		value: 'easytag',
		order: 30
	},
	{
		label: 'Insomnia',
		value: 'insomnia',
		order: 50
	},
	{
		label: 'Neovim',
		value: 'neovim',
		order: 50
	},
	{
		label: 'Vieb',
		value: 'vieb',
		order: 70
	},
	{
		label: 'VS Code',
		value: 'vscode',
		order: 50
	},
	{
		label: 'VLC',
		value: 'vlc',
		order: 30
	},
	{
		label: 'My SQL',
		value: 'mysql80',
		order: 40
	},
	{
		label: 'Nodejs',
		value: 'nodejs-18_x',
		order: 80
	},
	{
		label: 'PHP',
		value: 'php81',
		order: 80
	},
	{
		label: 'Composer',
		value: 'php81Packages.composer',
		order: 80
	},
	{
		label: 'Git',
		value: 'git',
		order: 10
	},
	{
		label: 'Wget',
		value: 'wget',
		order: 10
	},
	{
		label: 'Curl',
		value: 'curl',
		order: 10
	},
	{
		label: 'Make',
		value: 'ocaml_make',
		order: 10
	},
	{
		label: 'Cargo',
		value: 'cargo',
		order: 80
	},
	{
		label: 'Python',
		value: 'python38',
		order: 80
	},
	{
		label: 'Pip',
		value: 'python310Packages.pip',
		order: 80
	},
	{
		label: 'Blender',
		value: 'blender',
		order: 60
	},
	{
		label: 'Filezilla',
		value: 'filezilla',
		order: 10
	},
	{
		label: 'Vivaldi',
		value: 'vivaldi',
		order: 70
	},
	{
		label: 'GIMP',
		value: 'gimp',
		order: 60
	},
	{
		label: 'Gparted',
		value: 'gparted',
		order: 10
	},
	{
		label: 'Kdenlive',
		value: 'libsForQt5.kdenlive',
		order: 60
	},
	{
		label: 'Libre Office',
		value: 'libreoffice-qt',
		order: 10
	},
	{
		label: 'Transmission',
		value: 'transmission',
		order: 10
	},
	{
		label: 'Sublime Merge',
		value: 'sublime-merge',
		order: 50
	},
	{
		label: 'Slack',
		value: 'slack',
		order: 20
	},
	{
		label: 'Skype',
		value: 'skypeforlinux',
		order: 20
	},
	{
		label: 'Postman',
		value: 'postman',
		order: 50
	},
	{
		label: 'Redshift',
		value: 'redshift',
		order: 10
	},
	{
		label: 'Team Viewer',
		value: 'teamviewer',
		order: 20
	},
	{
		label: 'Opera',
		value: 'opera',
		order: 70
	},
	{
		label: 'Calibre',
		value: 'calibre',
		order: 10
	},
	{
		label: 'Handbrake',
		value: 'handbrake',
		order: 60
	},
	{
		label: 'Rhythmbox',
		value: 'rhythmbox',
		order: 10
	},
	{
		label: 'Virtualbox',
		value: 'virtualbox',
		order: 10
	},
	{
		label: 'Google Chrome',
		value: 'google-chrome',
		order: 70
	}
].sort((x, y) => (x.order < y.order ? 1 : -1));
