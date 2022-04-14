/**
 * Enumerates the core entity types.
 */
export type EntityType =

    'USER' |

    'COMPANY' |

    // CUSTOMER COMPANY ENTITIES

    'SUPPORT_TICKET' |

    'SUPPORT_TICKET_COMMENT' |

    'SUPPORT_TICKET_ATTACHMENT' |

    // CUSTOMER COMPANY IAAS ENTITIES

    'IAAS_PRODUCT' |

    'IAAS_LOCATION' |

    'IAAS_ORGANIZATION' |

    'IAAS_VPG' |

    'IAAS_VCC_FAILOVER_PLAN' |

    'IAAS_DISASTER_RECOVERY_RUNBOOK' |

    'IAAS_CATALOG' |

    'IAAS_MEDIA' |

    'IAAS_VAPP_TEMPLATE' |

    'IAAS_VAPP_TEMPLATE_VM' |

    'IAAS_VDC' |

    'IAAS_EDGE' |

    'IAAS_STORAGE_PROFILE' |

    'IAAS_INTERNAL_NETWORK' |

    'IAAS_VAPP' |

    'IAAS_VAPP_NETWORK' |

    'IAAS_VM' |

    'IAAS_PERSISTENT_DISK' |

    'IAAS_BACKUP_GROUP' |

    // VCC BACKUP ENTITIES

    'VCC_BACKUP_PRODUCT' |

    'VCC_BACKUP_LOCATION' |

    'VCC_BACKUP_TENANT' |

    'VAC_BACKUP_JOB' |

    // OBJECT STORAGE ENTITIES

    'OBJECT_STORAGE_PRODUCT' |

    'OBJECT_STORAGE_LOCATION' |

    // GENERIC ENTITIES

    'ALERT' |

    'TASK' |

    // MS365 ENTITIES

    'O365_PRODUCT' |

    'O365_LOCATION' |

    'O365_ORGANIZATION' |

    'O365_JOB' |

    'O365_JOB_SESSION' |

    'O365_RESTORE_SESSION' |

    // OBJECT STORAGE CEPH ENTITIES

    'OBJECT_STORAGE_CEPH_PRODUCT' |

    'OBJECT_STORAGE_CEPH_LOCATION' |

    'OBJECT_STORAGE_CEPH_TENANT';
