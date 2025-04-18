import * as wasi from "./wasi_defs.js";
import { Fd } from "./fd.js";
export declare class OpenFile extends Fd {
    file: File;
    file_pos: bigint;
    constructor(file: File);
    fd_fdstat_get(): {
        ret: number;
        fdstat: wasi.Fdstat | null;
    };
    fd_read(view8: Uint8Array, iovs: Array<wasi.Iovec>): {
        ret: number;
        nread: number;
    };
    fd_pread(view8: Uint8Array, iovs: Array<wasi.Iovec>, offset: bigint): {
        ret: number;
        nread: number;
    };
    fd_seek(offset: bigint, whence: number): {
        ret: number;
        offset: bigint;
    };
    fd_tell(): {
        ret: number;
        offset: bigint;
    };
    fd_write(view8: Uint8Array, iovs: Array<wasi.Ciovec>): {
        ret: number;
        nwritten: number;
    };
    fd_pwrite(view8: Uint8Array, iovs: Array<wasi.Ciovec>, offset: bigint): {
        ret: number;
        nwritten: number;
    };
    fd_filestat_get(): {
        ret: number;
        filestat: wasi.Filestat;
    };
}
export declare class OpenSyncOPFSFile extends Fd {
    file: SyncOPFSFile;
    position: bigint;
    constructor(file: SyncOPFSFile);
    fd_fdstat_get(): {
        ret: number;
        fdstat: wasi.Fdstat | null;
    };
    fd_filestat_get(): {
        ret: number;
        filestat: wasi.Filestat;
    };
    fd_read(view8: Uint8Array, iovs: Array<wasi.Iovec>): {
        ret: number;
        nread: number;
    };
    fd_seek(offset: number | bigint, whence: number): {
        ret: number;
        offset: bigint;
    };
    fd_write(view8: Uint8Array, iovs: Array<wasi.Iovec>): {
        ret: number;
        nwritten: number;
    };
    fd_datasync(): number;
    fd_sync(): number;
    fd_close(): number;
}
export declare class OpenDirectory extends Fd {
    dir: Directory;
    constructor(dir: Directory);
    fd_fdstat_get(): {
        ret: number;
        fdstat: wasi.Fdstat | null;
    };
    fd_readdir_single(cookie: bigint): {
        ret: number;
        dirent: wasi.Dirent | null;
    };
    path_filestat_get(flags: number, path: string): {
        ret: number;
        filestat: wasi.Filestat | null;
    };
    path_open(dirflags: number, path: string, oflags: number, fs_rights_base: bigint, fs_rights_inheriting: bigint, fd_flags: number): {
        ret: number;
        fd_obj: Fd | null;
    };
    path_create_directory(path: string): number;
    path_unlink_file(path: string): number;
    path_remove_directory(path: string): number;
    clean_path(path: string): string;
}
export declare class PreopenDirectory extends OpenDirectory {
    prestat_name: Uint8Array;
    constructor(name: string, contents: {
        [key: string]: File | Directory | SyncOPFSFile;
    });
    fd_prestat_get(): {
        ret: number;
        prestat: wasi.Prestat | null;
    };
    fd_prestat_dir_name(): {
        ret: number;
        prestat_dir_name: Uint8Array;
    };
}
type FileOptions = Partial<{
    readonly: boolean;
}>;
export declare class File {
    data: Uint8Array;
    readonly: boolean;
    constructor(data: ArrayBuffer | SharedArrayBuffer | Uint8Array | Array<number>, options?: FileOptions);
    open(fd_flags: number): OpenFile;
    get size(): bigint;
    stat(): wasi.Filestat;
    truncate(): number;
}
export interface FileSystemSyncAccessHandle {
    close(): void;
    flush(): void;
    getSize(): number;
    read(buffer: ArrayBuffer | ArrayBufferView, options?: {
        at: number;
    }): number;
    truncate(to: number): void;
    write(buffer: ArrayBuffer | ArrayBufferView, options?: {
        at: number;
    }): number;
}
export declare class SyncOPFSFile {
    handle: FileSystemSyncAccessHandle;
    readonly: boolean;
    constructor(handle: FileSystemSyncAccessHandle, options?: FileOptions);
    open(fd_flags: number): OpenSyncOPFSFile;
    get size(): bigint;
    stat(): wasi.Filestat;
    truncate(): number;
}
export declare class Directory {
    contents: {
        [key: string]: File | Directory | SyncOPFSFile;
    };
    readonly: boolean;
    constructor(contents: {
        [key: string]: File | Directory | SyncOPFSFile;
    });
    open(fd_flags: number): OpenDirectory;
    stat(): wasi.Filestat;
    get_entry_for_path(path: string): File | Directory | SyncOPFSFile | null;
    get_parent_dir_for_path(path: string): Directory | null;
    create_entry_for_path(path: string, is_dir: boolean): File | Directory | SyncOPFSFile;
}
export declare class ConsoleStdout extends Fd {
    write: (buffer: Uint8Array) => void;
    constructor(write: (buffer: Uint8Array) => void);
    fd_filestat_get(): {
        ret: number;
        filestat: wasi.Filestat;
    };
    fd_fdstat_get(): {
        ret: number;
        fdstat: wasi.Fdstat | null;
    };
    fd_write(view8: Uint8Array, iovs: Array<wasi.Ciovec>): {
        ret: number;
        nwritten: number;
    };
    static lineBuffered(write: (line: string) => void): ConsoleStdout;
}
export {};
