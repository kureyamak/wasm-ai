import * as wasi from "./wasi_defs.js";
export declare class Fd {
    fd_advise(offset: bigint, len: bigint, advice: number): number;
    fd_allocate(offset: bigint, len: bigint): number;
    fd_close(): number;
    fd_datasync(): number;
    fd_fdstat_get(): {
        ret: number;
        fdstat: wasi.Fdstat | null;
    };
    fd_fdstat_set_flags(flags: number): number;
    fd_fdstat_set_rights(fs_rights_base: bigint, fs_rights_inheriting: bigint): number;
    fd_filestat_get(): {
        ret: number;
        filestat: wasi.Filestat | null;
    };
    fd_filestat_set_size(size: bigint): number;
    fd_filestat_set_times(atim: bigint, mtim: bigint, fst_flags: number): number;
    fd_pread(view8: Uint8Array, iovs: Array<wasi.Iovec>, offset: bigint): {
        ret: number;
        nread: number;
    };
    fd_prestat_get(): {
        ret: number;
        prestat: wasi.Prestat | null;
    };
    fd_prestat_dir_name(): {
        ret: number;
        prestat_dir_name: Uint8Array | null;
    };
    fd_pwrite(view8: Uint8Array, iovs: Array<wasi.Ciovec>, offset: bigint): {
        ret: number;
        nwritten: number;
    };
    fd_read(view8: Uint8Array, iovs: Array<wasi.Iovec>): {
        ret: number;
        nread: number;
    };
    fd_readdir_single(cookie: bigint): {
        ret: number;
        dirent: wasi.Dirent | null;
    };
    fd_seek(offset: bigint, whence: number): {
        ret: number;
        offset: bigint;
    };
    fd_sync(): number;
    fd_tell(): {
        ret: number;
        offset: bigint;
    };
    fd_write(view8: Uint8Array, iovs: Array<wasi.Ciovec>): {
        ret: number;
        nwritten: number;
    };
    path_create_directory(path: string): number;
    path_filestat_get(flags: number, path: string): {
        ret: number;
        filestat: wasi.Filestat | null;
    };
    path_filestat_set_times(flags: number, path: string, atim: bigint, mtim: bigint, fst_flags: number): number;
    path_link(old_fd: number, old_flags: number, old_path: string, new_path: string): number;
    path_open(dirflags: number, path: string, oflags: number, fs_rights_base: bigint, fs_rights_inheriting: bigint, fd_flags: number): {
        ret: number;
        fd_obj: Fd | null;
    };
    path_readlink(path: string): {
        ret: number;
        data: string | null;
    };
    path_remove_directory(path: string): number;
    path_rename(old_path: string, new_fd: number, new_path: string): number;
    path_symlink(old_path: string, new_path: string): number;
    path_unlink_file(path: string): number;
}
