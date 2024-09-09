import * as maa from './maa'

export const Global = {
    get version() {
        return maa.version()
    },

    set log_dir(value: string) {
        if (!maa.set_global_option_log_dir(value)) {
            throw 'Global set log_dir failed'
        }
    },

    set save_draw(value: boolean) {
        if (!maa.set_global_option_save_draw(value)) {
            throw 'Global set save_draw failed'
        }
    },

    set recording(value: boolean) {
        if (!maa.set_global_option_recording(value)) {
            throw 'Global set recording failed'
        }
    },

    set stdout_level(value: keyof typeof maa.LoggingLevel) {
        if (!maa.set_global_option_stdout_level(maa.LoggingLevel[value])) {
            throw 'Global set stdout_level failed'
        }
    },

    set show_hit_draw(value: boolean) {
        if (!maa.set_global_option_show_hit_draw(value)) {
            throw 'Global set show_hit_draw failed'
        }
    },

    set debug_message(value: boolean) {
        if (!maa.set_global_option_debug_message(value)) {
            throw 'Global set debug_message failed'
        }
    }
}
