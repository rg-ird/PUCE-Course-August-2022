[
    {
        "aggregation": "segment", 
        "analysis_id": "40642fba-6e23-4efc-ad42-5964aa0b8d7f", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 8.92258071899414, 
                "sum": 8.92258071899414
            }, 
            "read_len_events_sum_temp": 8009, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 47.61959457397461, 
                "sum": 47.61959457397461
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 5.570594310760498, 
                "sum": 5.570594310760498
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 125389.484375, 
        "levels_sums": {
            "count": 1, 
            "mean": 98.80638122558594, 
            "open_pore_level_sum": 98.80638122558594
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_context_bases": "2", 
            "align_ref": "", 
            "allow_inferior_barcodes": "0", 
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb13-24.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "1", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "40", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_mid_strand_barcodes": "0", 
            "device": "", 
            "disable_pings": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_arrangements_files": "barcode_arrs_ncov8.cfg barcode_arrs_ncov96.cfg barcode_arrs_multivirus1.cfg barcode_arrs_multivirus8.cfg", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "40", 
            "min_length_lamp_target": "80", 
            "min_qscore": "7.000000", 
            "min_score": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "75.000000", 
            "min_score_mask": "40.000000", 
            "min_score_mid_barcodes": "40.000000", 
            "min_score_rear_override": "60.000000", 
            "model_file": "template_r10_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "96", 
            "num_callers": "1", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_filtering": "1", 
            "qscore_offset": "-0.415000", 
            "qscore_scale": "0.999000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "0", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trace_domains_log": "", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 86, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 35, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "4.4.1+1c81d6233"
        }, 
        "tracking_id": {
            "asic_id": "413700995", 
            "asic_id_eeprom": "2115804", 
            "asic_temp": "30.774506", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "19.05.1", 
            "exp_script_name": "d0820492737898dfa787e332a689c2abc20fd1c5", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-05-16T18:47:44Z", 
            "flow_cell_id": "FAK79931", 
            "guppy_version": "3.0.3+7e7b7d0", 
            "heatsink_temp": "33.937500", 
            "hostname": "GXB01435", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "04c158a0-0b37-43ad-a728-2853eb693b17", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T22:06:07Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "40642fba-6e23-4efc-ad42-5964aa0b8d7f", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 8.92258071899414, 
                "sum": 8.92258071899414
            }, 
            "read_len_events_sum_temp": 8009, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 47.61959457397461, 
                "sum": 47.61959457397461
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 5.570594310760498, 
                "sum": 5.570594310760498
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 125389.484375, 
        "levels_sums": {
            "count": 1, 
            "mean": 98.80638122558594, 
            "open_pore_level_sum": 98.80638122558594
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_context_bases": "2", 
            "align_ref": "", 
            "allow_inferior_barcodes": "0", 
            "arrangements_files": "barcode_arrs_pcr12.cfg barcode_arrs_pcr96.cfg barcode_arrs_nb12.cfg barcode_arrs_nb13-24.cfg barcode_arrs_nb24.cfg barcode_arrs_nb96.cfg barcode_arrs_rbk.cfg barcode_arrs_lwb.cfg barcode_arrs_rlb.cfg barcode_arrs_rab.cfg barcode_arrs_rbk4.cfg barcode_arrs_rbk096.cfg barcode_arrs_vmk.cfg barcode_arrs_vmk2.cfg barcode_arrs_16s.cfg", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "1", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "beam_cut": "100.000000", 
            "beam_width": "40", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "3800", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "3000", 
            "calib_reference": "lambda_3.6kb.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_mid_strand_barcodes": "0", 
            "device": "", 
            "disable_pings": "0", 
            "dmean_threshold": "1.000000", 
            "dmean_win_size": "2", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "0", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "input_file_list": "", 
            "jump_threshold": "1.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_arrangements_files": "barcode_arrs_ncov8.cfg barcode_arrs_ncov96.cfg barcode_arrs_multivirus1.cfg barcode_arrs_multivirus8.cfg", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_search_len": "1000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "40", 
            "min_length_lamp_target": "80", 
            "min_qscore": "7.000000", 
            "min_score": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "75.000000", 
            "min_score_mask": "40.000000", 
            "min_score_mid_barcodes": "40.000000", 
            "min_score_rear_override": "60.000000", 
            "model_file": "template_r10_450bps_hac.jsn", 
            "nested_output_folder": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "96", 
            "num_callers": "1", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_filtering": "1", 
            "qscore_offset": "-0.415000", 
            "qscore_scale": "0.999000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "0", 
            "recursive": "0", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "0", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trace_domains_log": "", 
            "trim_barcodes": "0", 
            "trim_min_events": "3", 
            "trim_strategy": "dna", 
            "trim_threshold": "2.500000", 
            "u_substitution": "0", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 86, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 2100, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "4.4.1+1c81d6233"
        }, 
        "tracking_id": {
            "asic_id": "413700995", 
            "asic_id_eeprom": "2115804", 
            "asic_temp": "30.774506", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "19.05.1", 
            "exp_script_name": "d0820492737898dfa787e332a689c2abc20fd1c5", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-05-16T18:47:44Z", 
            "flow_cell_id": "FAK79931", 
            "guppy_version": "3.0.3+7e7b7d0", 
            "heatsink_temp": "33.937500", 
            "hostname": "GXB01435", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "b71f6e4d-9ee1-4fa1-8415-1895824778a9", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T22:06:07Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }
]