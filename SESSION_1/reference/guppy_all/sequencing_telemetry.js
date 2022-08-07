[
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 8.157628059387207, 
                "sum": 24.472883224487305
            }, 
            "read_len_events_sum_temp": 123381, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 84000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 52.59120178222656, 
                "sum": 157.7736053466797
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 8.565537452697754, 
                "sum": 25.696613311767578
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 3562.4765625, 
        "levels_sums": {
            "count": 3, 
            "mean": 89.59587860107422, 
            "open_pore_level_sum": 268.7876281738281
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
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
            "msg_id": "dceb0b99-1547-419f-b117-87c4753fc9ec", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.211769104003906, 
                "sum": 16.423538208007812
            }, 
            "read_len_events_sum_temp": 17320, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 53.19019317626953, 
                "sum": 106.38038635253906
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 7.008166790008545, 
                "sum": 14.01633358001709
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 6644.3662109375, 
        "levels_sums": {
            "count": 2, 
            "mean": 105.37800598144531, 
            "open_pore_level_sum": 210.75601196289062
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 252, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 2, 
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
            "msg_id": "1e35e835-a59e-4171-8a0f-89b16cbf0942", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 8.111200332641602, 
                "sum": 32.444801330566406
            }, 
            "read_len_events_sum_temp": 69284, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 54000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 50.7193603515625, 
                "sum": 202.87744140625
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 7.5921807289123535, 
                "sum": 30.368722915649414
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 10001.236328125, 
        "levels_sums": {
            "count": 4, 
            "mean": 102.88424682617188, 
            "open_pore_level_sum": 411.5369873046875
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 3, 
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
            "msg_id": "966e00e5-547c-4d76-94af-52a8fc1cd347", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 8.701844215393066, 
                "sum": 26.105531692504883
            }, 
            "read_len_events_sum_temp": 57051, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 44000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 50.135345458984375, 
                "sum": 150.40603637695312
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 7.906650066375732, 
                "sum": 23.71994972229004
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 13381.3779296875, 
        "levels_sums": {
            "count": 3, 
            "mean": 103.23445892333984, 
            "open_pore_level_sum": 309.703369140625
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 305, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 4, 
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
            "msg_id": "2e22574f-9400-4b7e-a888-9b8a45d78a18", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.480706214904785, 
                "sum": 7.480706214904785
            }, 
            "read_len_events_sum_temp": 875, 
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
                    "length": 0.0
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
                "mean": 56.42472839355469, 
                "sum": 56.42472839355469
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 7.187863349914551, 
                "sum": 7.187863349914551
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
        "latest_run_time": 17431.787109375, 
        "levels_sums": {
            "count": 1, 
            "mean": 108.8864517211914, 
            "open_pore_level_sum": 108.8864517211914
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 49, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 5, 
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
            "msg_id": "d8e36aba-b385-4d1a-bddc-f508b2d670bb", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 8.39258098602295, 
                "sum": 25.17774200439453
            }, 
            "read_len_events_sum_temp": 21720, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 51.632816314697266, 
                "sum": 154.89845275878906
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 7.247762680053711, 
                "sum": 21.743288040161133
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 19765.244140625, 
        "levels_sums": {
            "count": 3, 
            "mean": 103.99437713623047, 
            "open_pore_level_sum": 311.9831237792969
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 498, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 6, 
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
            "msg_id": "a621a8c1-9883-4fe4-aab8-e8c24037fbf1", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 5, 
                "mean": 8.545440673828125, 
                "sum": 42.727203369140625
            }, 
            "read_len_events_sum_temp": 68824, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 5, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 5, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 20000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 5, 
                "mean": 50.85413360595703, 
                "sum": 254.2706756591797
            }, 
            "strand_sd_pa": {
                "count": 5, 
                "mean": 7.5472564697265625, 
                "sum": 37.73628234863281
            }
        }, 
        "channel_count": 5, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 24516.771484375, 
        "levels_sums": {
            "count": 5, 
            "mean": 103.89881896972656, 
            "open_pore_level_sum": 519.49407958984375
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 5, 
        "reads_per_channel_dist": [
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 7, 
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
            "msg_id": "40719ed0-5845-4eb9-80cb-06a6c6f78b75", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.195425033569336, 
                "sum": 16.390850067138672
            }, 
            "read_len_events_sum_temp": 22974, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 46.72111511230469, 
                "sum": 93.442230224609375
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 8.17619514465332, 
                "sum": 16.35239028930664
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 26934.00390625, 
        "levels_sums": {
            "count": 2, 
            "mean": 101.88452911376953, 
            "open_pore_level_sum": 203.76905822753906
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 8, 
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
            "msg_id": "67801ab5-120d-4fdd-bda1-25659da22d49", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.114392280578613, 
                "sum": 16.228784561157227
            }, 
            "read_len_events_sum_temp": 27035, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 50.584590911865234, 
                "sum": 101.16918182373047
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 8.17619514465332, 
                "sum": 16.35239028930664
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 30446.390625, 
        "levels_sums": {
            "count": 2, 
            "mean": 105.07805633544922, 
            "open_pore_level_sum": 210.15611267089844
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 51, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 9, 
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
            "msg_id": "2f3528a4-5fd5-4b6d-a35e-d586339fefd9", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 6, 
                "mean": 7.880338191986084, 
                "sum": 47.28202819824219
            }, 
            "read_len_events_sum_temp": 111343, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 6, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 6, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 19000.0
                }, 
                {
                    "count": 1, 
                    "length": 24000.0
                }, 
                {
                    "count": 1, 
                    "length": 39000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 6, 
                "mean": 51.21352767944336, 
                "sum": 307.2811584472656
            }, 
            "strand_sd_pa": {
                "count": 6, 
                "mean": 8.026447296142578, 
                "sum": 48.15868377685547
            }
        }, 
        "channel_count": 6, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 35921.03515625, 
        "levels_sums": {
            "count": 6, 
            "mean": 105.15740966796875, 
            "open_pore_level_sum": 630.9444580078125
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 6, 
        "reads_per_channel_dist": [
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 10, 
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
            "msg_id": "61efd7fd-e283-4c66-a514-642251fd6f7d", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3, 
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 7.482237815856934, 
                "sum": 52.37566375732422
            }, 
            "read_len_events_sum_temp": 69576, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 49.031494140625, 
                "sum": 343.220458984375
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 7.418902397155762, 
                "sum": 51.932315826416016
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 39525.28125, 
        "levels_sums": {
            "count": 7, 
            "mean": 98.89427185058594, 
            "open_pore_level_sum": 692.2598876953125
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 7, 
        "reads_per_channel_dist": [
            {
                "channel": 104, 
                "count": 1
            }, 
            {
                "channel": 110, 
                "count": 1
            }, 
            {
                "channel": 168, 
                "count": 1
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 204, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 11, 
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
            "msg_id": "0b2f4c50-d53a-4b9f-9377-6aa12484f320", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 8.097618103027344, 
                "sum": 8.097618103027344
            }, 
            "read_len_events_sum_temp": 13074, 
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
                    "length": 13000.0
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
                "mean": 52.471405029296875, 
                "sum": 52.471405029296875
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 7.367560386657715, 
                "sum": 7.367560386657715
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
        "latest_run_time": 41768.23046875, 
        "levels_sums": {
            "count": 1, 
            "mean": 105.4338607788086, 
            "open_pore_level_sum": 105.4338607788086
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 49, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 12, 
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
            "msg_id": "9c0bb6cf-232d-4e90-b6d8-b8f24e73651a", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 8.3004302978515625, 
                "sum": 33.20172119140625
            }, 
            "read_len_events_sum_temp": 25972, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 50.00057601928711, 
                "sum": 200.00230407714844
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 7.50233268737793, 
                "sum": 30.00933074951172
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 45287.5859375, 
        "levels_sums": {
            "count": 4, 
            "mean": 103.25733947753906, 
            "open_pore_level_sum": 413.02935791015625
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 51, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 13, 
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
            "msg_id": "dbc1aff0-48e2-4afe-8bd5-deacd4a9b503", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 6
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 6, 
                "mean": 8.269537925720215, 
                "sum": 49.61722946166992
            }, 
            "read_len_events_sum_temp": 119024, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 6, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 6, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 42000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 6, 
                "mean": 48.96731948852539, 
                "sum": 293.8039245605469
            }, 
            "strand_sd_pa": {
                "count": 6, 
                "mean": 7.667054653167725, 
                "sum": 46.00232696533203
            }
        }, 
        "channel_count": 6, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 49756.61328125, 
        "levels_sums": {
            "count": 6, 
            "mean": 99.9058609008789, 
            "open_pore_level_sum": 599.4351806640625
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 6, 
        "reads_per_channel_dist": [
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 494, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 14, 
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
            "msg_id": "e23389be-b6f0-4b8f-81fa-7a4008be424f", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 8.222514152526855, 
                "sum": 24.66754150390625
            }, 
            "read_len_events_sum_temp": 26402, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 51.09373092651367, 
                "sum": 153.28118896484375
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 7.846750736236572, 
                "sum": 23.540252685546875
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 53608.18359375, 
        "levels_sums": {
            "count": 3, 
            "mean": 100.9220962524414, 
            "open_pore_level_sum": 302.76629638671875
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 185, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 15, 
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
            "msg_id": "3e59daea-842f-4885-9fa9-2d9d5a00d90c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 8.287788391113281, 
                "sum": 24.863365173339844
            }, 
            "read_len_events_sum_temp": 51672, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 17000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 48.45817947387695, 
                "sum": 145.37454223632812
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 7.307661533355713, 
                "sum": 21.922985076904297
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 56893.59765625, 
        "levels_sums": {
            "count": 3, 
            "mean": 101.12036895751953, 
            "open_pore_level_sum": 303.3611145019531
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 317, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 492, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 16, 
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
            "msg_id": "f64e0b94-e9d0-44bf-ab5d-071dde7a5e35", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 8
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 8.172934532165527, 
                "sum": 73.55641174316406
            }, 
            "read_len_events_sum_temp": 130285, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 17000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 49.73602294921875, 
                "sum": 447.62420654296875
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 7.746919631958008, 
                "sum": 69.72227478027344
            }
        }, 
        "channel_count": 8, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 68096.078125, 
        "levels_sums": {
            "count": 9, 
            "mean": 103.33012390136719, 
            "open_pore_level_sum": 929.97113037109375
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 9, 
        "reads_per_channel_dist": [
            {
                "channel": 66, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 2
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 19, 
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
            "msg_id": "a68de682-9e64-46b8-a314-290d696b0b4b", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 6.616964340209961, 
                "sum": 13.233928680419922
            }, 
            "read_len_events_sum_temp": 26345, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 55.975486755371094, 
                "sum": 111.95097351074219
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 8.71528434753418, 
                "sum": 17.43056869506836
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 71752.6328125, 
        "levels_sums": {
            "count": 2, 
            "mean": 90.25708770751953, 
            "open_pore_level_sum": 180.51417541503906
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 10, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 20, 
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
            "msg_id": "91407007-bf71-4c78-8e8a-f40c531938a2", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.66680908203125, 
                "sum": 7.66680908203125
            }, 
            "read_len_events_sum_temp": 5336, 
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
                    "length": 5000.0
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
                "mean": 46.18202209472656, 
                "sum": 46.18202209472656
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 8.086346626281738, 
                "sum": 8.086346626281738
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
        "latest_run_time": 72022.546875, 
        "levels_sums": {
            "count": 1, 
            "mean": 98.13880157470703, 
            "open_pore_level_sum": 98.13880157470703
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 380, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 21, 
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
            "msg_id": "bba8bf69-c2f2-40df-be24-509bc5df28d4", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 7.072808265686035, 
                "sum": 14.14561653137207
            }, 
            "read_len_events_sum_temp": 25795, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 49.68610763549805, 
                "sum": 99.3722152709961
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 6.738621711730957, 
                "sum": 13.477243423461914
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 79017.796875, 
        "levels_sums": {
            "count": 2, 
            "mean": 98.40026092529297, 
            "open_pore_level_sum": 196.80052185058594
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 475, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 22, 
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
            "msg_id": "923b31f4-52b7-4fe2-b1ea-fd3f82964bba", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.066118240356445, 
                "sum": 16.13223648071289
            }, 
            "read_len_events_sum_temp": 45843, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 35000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 46.72111511230469, 
                "sum": 93.442230224609375
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 7.457408428192139, 
                "sum": 14.914816856384277
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 80338.1875, 
        "levels_sums": {
            "count": 2, 
            "mean": 100.88836669921875, 
            "open_pore_level_sum": 201.7767333984375
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 34, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 23, 
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
            "msg_id": "55743606-88bf-48cb-9a56-cbc2781943f2", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 7.941562652587891, 
                "sum": 23.824687957763672
            }, 
            "read_len_events_sum_temp": 92077, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 84000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 52.77089309692383, 
                "sum": 158.31268310546875
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 8.924930572509766, 
                "sum": 26.774791717529297
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 85807.1328125, 
        "levels_sums": {
            "count": 3, 
            "mean": 87.38512420654297, 
            "open_pore_level_sum": 262.1553649902344
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 459, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 24, 
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
            "msg_id": "1d7125c5-b6c7-4f83-ab59-0cc543ca43df", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.718976974487305, 
                "sum": 17.43795394897461
            }, 
            "read_len_events_sum_temp": 98664, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 61000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 49.50640869140625, 
                "sum": 99.0128173828125
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 7.726953029632568, 
                "sum": 15.453906059265137
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 89740.578125, 
        "levels_sums": {
            "count": 2, 
            "mean": 103.23920440673828, 
            "open_pore_level_sum": 206.47840881347656
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 25, 
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
            "msg_id": "93a11ddd-ab84-4bd1-a973-80965edd77ac", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 7.264440536499023, 
                "sum": 21.79332160949707
            }, 
            "read_len_events_sum_temp": 25599, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 47.2003059387207, 
                "sum": 141.60092163085938
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 7.5472564697265625, 
                "sum": 22.641769409179688
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 96821.609375, 
        "levels_sums": {
            "count": 3, 
            "mean": 100.6077880859375, 
            "open_pore_level_sum": 301.8233642578125
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 500, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 27, 
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
            "msg_id": "bb7c344a-860c-4796-8bc0-e522bbabdd56", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 8.258954048156738, 
                "sum": 8.258954048156738
            }, 
            "read_len_events_sum_temp": 4949, 
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
                    "length": 4000.0
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
                "mean": 48.697776794433594, 
                "sum": 48.697776794433594
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 7.906650066375732, 
                "sum": 7.906650066375732
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
        "latest_run_time": 97500.9453125, 
        "levels_sums": {
            "count": 1, 
            "mean": 103.95307922363281, 
            "open_pore_level_sum": 103.95307922363281
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 46, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 28, 
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
            "msg_id": "488bb588-9938-4ea3-bdd5-ebb6c9d26e96", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.350396156311035, 
                "sum": 16.70079231262207
            }, 
            "read_len_events_sum_temp": 28167, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 20000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 47.97898864746094, 
                "sum": 95.957977294921875
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 7.5472564697265625, 
                "sum": 15.094512939453125
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 107762.125, 
        "levels_sums": {
            "count": 2, 
            "mean": 105.0440673828125, 
            "open_pore_level_sum": 210.088134765625
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 30, 
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
            "msg_id": "75a33804-9bfe-4d59-b07d-dd4c9ce4d6d5", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.851901054382324, 
                "sum": 7.851901054382324
            }, 
            "read_len_events_sum_temp": 9697, 
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
                    "length": 9000.0
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
                "mean": 47.97898864746094, 
                "sum": 47.97898864746094
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 7.906650066375732, 
                "sum": 7.906650066375732
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
        "latest_run_time": 108713.3671875, 
        "levels_sums": {
            "count": 1, 
            "mean": 103.2821044921875, 
            "open_pore_level_sum": 103.2821044921875
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 318, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 31, 
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
            "msg_id": "9ffe0bf9-7669-43b5-9649-d93521b3c159", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.052745819091797, 
                "sum": 16.105491638183594
            }, 
            "read_len_events_sum_temp": 32180, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 22000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 47.799293518066406, 
                "sum": 95.59858703613281
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 8.086346626281738, 
                "sum": 16.172693252563477
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 118777.2109375, 
        "levels_sums": {
            "count": 2, 
            "mean": 101.63428497314453, 
            "open_pore_level_sum": 203.26856994628906
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 33, 
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
            "msg_id": "d07b4ed8-2ae3-4bf2-8edf-5efedadb502e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 8.368557929992676, 
                "sum": 25.105674743652344
            }, 
            "read_len_events_sum_temp": 25867, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 51.75261306762695, 
                "sum": 155.25784301757812
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 8.026447296142578, 
                "sum": 24.079341888427734
            }
        }, 
        "channel_count": 3, 
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
            "count": 3, 
            "mean": 104.90619659423828, 
            "open_pore_level_sum": 314.7185974121094
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 86, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 483, 
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
            "msg_id": "87ecce80-7d63-49cb-b20b-e43bee4694d4", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 7.686275482177734, 
                "sum": 23.058826446533203
            }, 
            "read_len_events_sum_temp": 60438, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 40000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 44.744449615478516, 
                "sum": 134.2333526611328
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 6.4690775871276855, 
                "sum": 19.4072322845459
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 128426.6875, 
        "levels_sums": {
            "count": 3, 
            "mean": 96.5534439086914, 
            "open_pore_level_sum": 289.66033935546875
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 36, 
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
            "msg_id": "db36d9f7-7e75-4188-9bec-2679491f46b0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.673418045043945, 
                "sum": 17.34683609008789
            }, 
            "read_len_events_sum_temp": 21217, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 51.123680114746094, 
                "sum": 102.24736022949219
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 8.086346626281738, 
                "sum": 16.172693252563477
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 133118.8125, 
        "levels_sums": {
            "count": 2, 
            "mean": 101.68466186523438, 
            "open_pore_level_sum": 203.36932373046875
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 313, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 37, 
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
            "msg_id": "c68eb349-889f-49ab-aa45-acf0da628b1d", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.986333847045898, 
                "sum": 7.986333847045898
            }, 
            "read_len_events_sum_temp": 27296, 
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
                    "length": 27000.0
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
                "mean": 48.877471923828125, 
                "sum": 48.877471923828125
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 6.828470230102539, 
                "sum": 6.828470230102539
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
        "latest_run_time": 133314.8125, 
        "levels_sums": {
            "count": 1, 
            "mean": 100.45320129394531, 
            "open_pore_level_sum": 100.45320129394531
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 47, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 38, 
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
            "msg_id": "d825163b-c59b-46c2-9ffb-be47c0bcbd39", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
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
                "mean": 8.95846939086914, 
                "sum": 8.95846939086914
            }, 
            "read_len_events_sum_temp": 17702, 
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
                    "length": 17000.0
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
                "mean": 50.31504440307617, 
                "sum": 50.31504440307617
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 8.44573974609375, 
                "sum": 8.44573974609375
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
        "latest_run_time": 139786.640625, 
        "levels_sums": {
            "count": 1, 
            "mean": 99.97907257080078, 
            "open_pore_level_sum": 99.97907257080078
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 477, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 39, 
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
            "msg_id": "560a306e-07bf-411b-835c-c64a367e5963", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 9.35379409790039, 
                "sum": 9.35379409790039
            }, 
            "read_len_events_sum_temp": 16393, 
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
                    "length": 16000.0
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
                "mean": 7.547256946563721, 
                "sum": 7.547256946563721
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
        "latest_run_time": 149041.796875, 
        "levels_sums": {
            "count": 1, 
            "mean": 101.58075714111328, 
            "open_pore_level_sum": 101.58075714111328
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
                "channel": 227, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 42, 
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
            "msg_id": "b38b8b8e-61fd-4d59-b842-ccaa2d20cd6b", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.20693588256836, 
                "sum": 16.41387176513672
            }, 
            "read_len_events_sum_temp": 9627, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 51.303375244140625, 
                "sum": 102.60675048828125
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 7.726953506469727, 
                "sum": 15.453907012939453
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 154523.78125, 
        "levels_sums": {
            "count": 2, 
            "mean": 106.32618713378906, 
            "open_pore_level_sum": 212.65237426757812
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 378, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 43, 
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
            "msg_id": "8a497c2f-9112-40cd-8f2c-b38a3a515f6c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 8.5137481689453125, 
                "sum": 17.027496337890625
            }, 
            "read_len_events_sum_temp": 16726, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 48.877471923828125, 
                "sum": 97.75494384765625
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 6.738621711730957, 
                "sum": 13.477243423461914
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 162918.578125, 
        "levels_sums": {
            "count": 2, 
            "mean": 101.1108627319336, 
            "open_pore_level_sum": 202.2217254638672
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 296, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 60, 
        "segment_number": 46, 
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
            "msg_id": "57095973-76e0-4ab5-b0a6-650d1eae944e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "ec8d98bf-1a3b-4bc2-b045-479bb21c09b8", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 12, 
                "pass": 88
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 26, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 33, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 9.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 100, 
                "mean": 8.09516716003418, 
                "sum": 809.5167236328125
            }, 
            "read_len_events_sum_temp": 1545730, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 100, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 100, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 3, 
                    "length": 1000.0
                }, 
                {
                    "count": 5, 
                    "length": 2000.0
                }, 
                {
                    "count": 8, 
                    "length": 3000.0
                }, 
                {
                    "count": 4, 
                    "length": 4000.0
                }, 
                {
                    "count": 5, 
                    "length": 5000.0
                }, 
                {
                    "count": 6, 
                    "length": 6000.0
                }, 
                {
                    "count": 9, 
                    "length": 7000.0
                }, 
                {
                    "count": 6, 
                    "length": 8000.0
                }, 
                {
                    "count": 6, 
                    "length": 9000.0
                }, 
                {
                    "count": 4, 
                    "length": 10000.0
                }, 
                {
                    "count": 5, 
                    "length": 12000.0
                }, 
                {
                    "count": 2, 
                    "length": 13000.0
                }, 
                {
                    "count": 2, 
                    "length": 15000.0
                }, 
                {
                    "count": 3, 
                    "length": 16000.0
                }, 
                {
                    "count": 3, 
                    "length": 17000.0
                }, 
                {
                    "count": 2, 
                    "length": 18000.0
                }, 
                {
                    "count": 3, 
                    "length": 19000.0
                }, 
                {
                    "count": 4, 
                    "length": 20000.0
                }, 
                {
                    "count": 1, 
                    "length": 22000.0
                }, 
                {
                    "count": 1, 
                    "length": 24000.0
                }, 
                {
                    "count": 2, 
                    "length": 25000.0
                }, 
                {
                    "count": 1, 
                    "length": 27000.0
                }, 
                {
                    "count": 1, 
                    "length": 35000.0
                }, 
                {
                    "count": 2, 
                    "length": 36000.0
                }, 
                {
                    "count": 1, 
                    "length": 39000.0
                }, 
                {
                    "count": 1, 
                    "length": 40000.0
                }, 
                {
                    "count": 1, 
                    "length": 42000.0
                }, 
                {
                    "count": 1, 
                    "length": 44000.0
                }, 
                {
                    "count": 1, 
                    "length": 49000.0
                }, 
                {
                    "count": 1, 
                    "length": 54000.0
                }, 
                {
                    "count": 2, 
                    "length": 61000.0
                }, 
                {
                    "count": 2, 
                    "length": 84000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 100, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 100, 
                "mean": 49.97722244262695, 
                "sum": 4997.72216796875
            }, 
            "strand_sd_pa": {
                "count": 100, 
                "mean": 7.691014289855957, 
                "sum": 769.1014404296875
            }
        }, 
        "channel_count": 83, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "genomic_dna", 
            "package": "bream4", 
            "package_version": "4.0.5", 
            "sample_frequency": "4000", 
            "sequencing_kit": "sqk-lsk109"
        }, 
        "latest_run_time": 162918.578125, 
        "levels_sums": {
            "count": 100, 
            "mean": 101.25187683105469, 
            "open_pore_level_sum": 10125.1875
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
            "chunks_per_runner": "160", 
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
            "gpu_runners_per_device": "8", 
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
            "model_file": "template_r10_450bps_fast.jsn", 
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
            "qscore_offset": "-1.130000", 
            "qscore_scale": "1.040000", 
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
        "read_count": 100, 
        "reads_per_channel_dist": [
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 10, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 34, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 47, 
                "count": 2
            }, 
            {
                "channel": 49, 
                "count": 2
            }, 
            {
                "channel": 51, 
                "count": 2
            }, 
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 66, 
                "count": 1
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 86, 
                "count": 1
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 104, 
                "count": 1
            }, 
            {
                "channel": 110, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 2
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 2
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 168, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 2
            }, 
            {
                "channel": 185, 
                "count": 1
            }, 
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 204, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 4
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }, 
            {
                "channel": 296, 
                "count": 1
            }, 
            {
                "channel": 305, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 3
            }, 
            {
                "channel": 313, 
                "count": 1
            }, 
            {
                "channel": 317, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 378, 
                "count": 2
            }, 
            {
                "channel": 380, 
                "count": 2
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 1
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 2
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 2
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 459, 
                "count": 1
            }, 
            {
                "channel": 475, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 483, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 492, 
                "count": 1
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 498, 
                "count": 1
            }, 
            {
                "channel": 500, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
        "segment_duration": 2760, 
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
            "msg_id": "632336be-386f-45a6-91d9-b73e1137ef4c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "protocol_run_id": "f5e69283-8b57-4404-883f-0fe03d8b0108", 
            "protocols_version": "1.11.3.1", 
            "run_id": "aea170ff77e7e76bd42c58335c528e15f49ba94c", 
            "sample_id": "Zymo-GridION-Even-3Peaks-Native-R10", 
            "time_stamp": "2022-08-02T20:40:02Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#ctrl#Auto", 
            "version": "3.3.2"
        }
    }
]