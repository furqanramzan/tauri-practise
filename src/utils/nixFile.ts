import { resolve, appDir } from '@tauri-apps/api/path';
import { BaseDirectory, writeTextFile, createDir } from '@tauri-apps/api/fs';

const baseDir = 'nix';
const baseFile = 'shell.nix';
const baseShellString = `{pkgs?import(fetchTarball"https://github.com/NixOS/nixpkgs/archive/9370544d849be8a07193e7611d02e6f6f1b10768.tar.gz"){}}:pkgs.mkShell{buildInputs=[package_string];}`;

function getPackageString(softwares: string[]) {
	let packageString = '';
	softwares.forEach((x) => (packageString += `pkgs.${x} `));
	return packageString;
}

function getShellString(packageString: string) {
	return baseShellString.replace('package_string', packageString);
}

function createNixDir() {
	return createDir(baseDir, { dir: BaseDirectory.App, recursive: true });
}

function createShellFile(shellString: string) {
	return writeTextFile(`${baseDir}/${baseFile}`, shellString, { dir: BaseDirectory.App });
}

export async function createFile(softwares: string[]) {
	const packageString = getPackageString(softwares);
	const shellString = getShellString(packageString);
	await createNixDir();
	await createShellFile(shellString);
	return resolve(await appDir(), baseDir);
}
